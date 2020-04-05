import { Injectable } from '@angular/core';
import { StepsService } from './steps.service';
import { getPrice } from './utils';

export interface Item {
  base: number;
  description: string;
  factor: number;
  id?: string;
  name: string;
  owned: number;
  power: number;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items = {
    nectar: {
      base: 10,
      description: 'Show Bouldy you really care! +1 step per click',
      factor: 1.17,
      name: 'Nectar',
      owned: 0,
      power: 0,
    },
    zeus: {
      base: 10,
      description: 'The blessings of Zeus!',
      factor: 1.17,
      name: "Zeus's Boon",
      owned: 0,
      power: 1,
    },
  };

  constructor(private stepsService: StepsService) {}

  buy = (itemName: string) => {
    this.stepsService.pay(getPrice(this.items[itemName]));
    const item = this.items[itemName];

    this.items = {
      ...this.items,
      [itemName]: {
        ...item,
        owned: item.owned + 1,
      },
    };
  };

  getClickPower = () => {
    const base = 1;
    const modifier = this.items.nectar.owned;

    return base + modifier;
  };

  getIncrement = () => {
    return Object.values(this.items).reduce(
      (acc: number, item: Item) => acc + item.owned * item.power,
      0
    );
  };
}
