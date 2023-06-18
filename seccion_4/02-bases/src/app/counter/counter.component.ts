import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="incremento(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incremento(+1)">+1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  incremento( value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
