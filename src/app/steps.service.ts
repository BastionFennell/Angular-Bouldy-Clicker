import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps = 1000000;

  pay(stepDecrement: number) {
    this.steps -= stepDecrement;
  }

  step(stepIncrement: number) {
    this.steps += stepIncrement;
  }
}
