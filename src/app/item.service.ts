import { Injectable } from '@angular/core';
import { StepsService } from './steps.service';
import { getPrice } from './utils';

export interface Item {
  base: number;
  description: string;
  factor: number;
  name?: string;
  owned: number;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items = {
    nectar: {
      base: 10,
      description: 'Show Bouldy you really care! +1 step per click',
      factor: 1.07,
      owned: 0,
    },
  };

  constructor(private stepsService: StepsService) {}

  buy = (itemName: string) => {
    this.stepsService.pay(getPrice(this.items[itemName]));
    this.items[itemName].owned++;
  };
}
