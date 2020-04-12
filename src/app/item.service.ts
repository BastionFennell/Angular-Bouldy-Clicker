import { Injectable } from '@angular/core';

import { StepsService } from './steps.service';
import { getPrice, updateItemsToVersion } from './utils';
import { VERSION } from './constants';
import defaultItems from './item-list';

export interface Item {
  base: number;
  description: string;
  factor: number;
  id?: string;
  name: string;
  owned: number;
  power: number;
  revealed: boolean;
  subtext: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items = JSON.parse(JSON.stringify(defaultItems));

  constructor(private stepsService: StepsService) {}

  clear = () => (this.items = JSON.parse(JSON.stringify(defaultItems)));

  load = (items: any, version: number) => {
    let newItems = items;
    if (version < VERSION) {
      newItems = updateItemsToVersion(
        items,
        version,
        VERSION,
        this.stepsService.steps
      );
    }
    this.items = newItems;
  };

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

  step = (steps: number) => {
    const keys = Object.keys(this.items);
    const length = keys.length;
    for (let i = 0; i < length; i++) {
      const item = this.items[keys[i]];
      if (!item.revealed && item.base <= steps) {
        this.items = {
          ...this.items,
          [keys[i]]: {
            ...item,
            revealed: true,
          },
        };
      } else if (item.base > steps) {
        break;
      }
    }
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
