import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps = 1000000;

  clear() {
    this.steps = 100000;
  }

  load(steps: number) {
    this.steps = steps;
  }

  pay(stepDecrement: number) {
    this.steps -= stepDecrement;
  }

  step(stepIncrement: number) {
    this.steps += stepIncrement;
  }
}
