import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps = 0;

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
