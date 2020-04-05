import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  constructor(
    private stepsService: StepsService,
    private itemService: ItemService
  ) {}

  ngOnInit() {}
  onClick() {
    this.stepsService.step(this.itemService.getClickPower());
  }
}
