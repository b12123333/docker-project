# 使用 OpenJDK 作為基礎映像
FROM openjdk:17-jdk-slim

# 設定工作目錄
WORKDIR /app

# 把 jar 檔案複製進來（假設你 build 完後叫 app.jar）
COPY target/complex_backend-0.0.1-SNAPSHOT.jar complex_backend-0.0.1-SNAPSHOT.jar

# 開放你的 Spring Boot 服務 port，通常是 8080
EXPOSE 5000

# 啟動指令
ENTRYPOINT ["java", "-jar", "complex_backend-0.0.1-SNAPSHOT.jar"]
