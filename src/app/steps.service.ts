import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  steps = 0;

  step(stepIncrement: number) {
    this.steps += stepIncrement;
  }
}
