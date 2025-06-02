import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fib',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fib.component.html',
})
export class fib implements OnInit {
  seenIndexes: { number: number }[] = [];
  values: { [key: string]: number } = {};
  index: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues(): void {
    this.http.get<{ [key: string]: number }>('api/fibonacci/current')
      .subscribe(values => {
        this.values = values;
      });
  }

  fetchIndexes(): void {
    this.http.get<{ number: number }[]>('api/fibonacci/all')
      .subscribe(seenIndexes => {
        this.seenIndexes = seenIndexes;
      });
  }

  handleSubmit(): void {
    this.http.post(`api/fibonacci/calculate/${this.index}`, null)
      .subscribe(() => {
        this.index = '';

        this.fetchValues();
        this.fetchIndexes();
      });
  }

  renderSeenIndexes(): string {
    return this.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues(): { key: string, value: number }[] {
    return Object.entries(this.values).map(([key, value]) => ({ key, value }));
  }
}
