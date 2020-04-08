import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps = 0;

  pay(stepDecrement: number) {
    this.steps -= stepDecrement;
  }

  step(stepIncrement: number) {
    this.steps += stepIncrement;
  }
}
