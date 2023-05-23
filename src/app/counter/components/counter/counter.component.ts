import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{ counter }}</h3>
      <button (click)="changeCounter(1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="changeCounter(-1)">-1</button>
    `
})
export class CounterComponent {

  counter = 5;

  changeCounter(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 5;
  }
};

