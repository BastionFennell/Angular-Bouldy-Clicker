import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  constructor(private stepsService: StepsService) {}

  ngOnInit() {}
  onClick() {
    this.stepsService.step(1);
  }
}
