package com.example.complex_backend;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/fibonacci")
public class FibonacciController {

    private final StringRedisTemplate redisTemplate;

    private final JdbcTemplate jdbcTemplate;

    public FibonacciController(StringRedisTemplate redisTemplate, JdbcTemplate jdbcTemplate) {
        this.redisTemplate = redisTemplate;
        this.jdbcTemplate = jdbcTemplate;
    }

    // 计算斐波那契数并存储到Redis
    @PostMapping("/calculate/{index}")
    public ResponseEntity<Long> calculateFibonacci(@PathVariable int index) {

        long result = calculateFib(index);
        // 将结果存储到Redis
        redisTemplate.opsForHash().put("values", String.valueOf(index), String.valueOf(result));
        // 发布消息到Redis
        redisTemplate.convertAndSend("insert", String.valueOf(index));

        jdbcTemplate.update("INSERT INTO values(number) VALUES (?)", index);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Map<String, Object>>> getAllValues() {
        return ResponseEntity.ok(jdbcTemplate.queryForList("SELECT * FROM values"));
    }

    // 获取所有已计算的结果
    @GetMapping("/current")
    public ResponseEntity<Map<Object, Object>> getAllResults() {
        return ResponseEntity.ok(redisTemplate.opsForHash().entries("values"));
    }

    private long calculateFib(int index) {
        if (index < 2) return 1;
        return calculateFib(index - 1) + calculateFib(index - 2);
    }
}
