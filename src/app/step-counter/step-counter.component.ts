import { Component, Input, OnInit } from '@angular/core';

import { formatSteps } from '../utils';

@Component({
  selector: 'app-step-counter',
  templateUrl: './step-counter.component.html',
  styleUrls: ['./step-counter.component.css'],
})
export class StepCounterComponent implements OnInit {
  @Input() steps: number;
  @Input() stepsPerSecond: number;

  constructor() {}

  getFormattedSteps = () => formatSteps(this.steps);

  ngOnInit() {}
}
