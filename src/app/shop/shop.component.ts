import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor(
    private stepsService: StepsService,
    private itemService: ItemService
  ) {}

  ngOnInit() {}

  getItems = () => {
    return Object.entries(this.itemService.items).map(([key, value]) => ({
      name: key,
      ...value,
    }));
  };
  getSteps = () => this.stepsService.steps;
  onBuy = (item: string) => this.itemService.buy(item);
}
