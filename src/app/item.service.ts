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
  revealed: boolean;
  subtext: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items = {
    nectar: {
      base: 10,
      description: 'Show Bouldy you really care!',
      factor: 1.07,
      name: 'Nectar',
      owned: 0,
      power: 0,
      revealed: false,
      subtext: 'Adds 1 step per click',
    },
    dionysus: {
      base: 10,
      description:
        'Sometimes, you just wanna party with your best friend, Bouldy',
      factor: 1.07,
      name: "Dionysus' Boon",
      owned: 0,
      power: 1,
      revealed: false,
      subtext: 'Adds 1 step per second',
    },
    athena: {
      base: 100,
      description:
        "The wise goddess understands the true value of Bouldy's patience",
      factor: 1.07,
      name: "Athena's Boon",
      owned: 0,
      power: 5,
      revealed: false,
      subtext: 'Adds 5 steps per second',
    },
    poseidon: {
      base: 500,
      description:
        'Maybe some extra knockback will help getting Bouldy up the steps?',
      factor: 1.07,
      name: "Poseidon's Boon",
      owned: 0,
      power: 10,
      revealed: false,
      subtext: 'Adds 10 steps per second',
    },
    ares: {
      base: 2500,
      description: 'Even the god of war has a soft spot for Bouldy',
      factor: 1.07,
      name: "Ares' Boon",
      owned: 0,
      power: 50,
      revealed: false,
      subtext: 'Adds 50 steps per second',
    },
    aphrodite: {
      base: 10000,
      description:
        'Bouldy may be playing hard to get, but Aphrodite is also patient',
      factor: 1.07,
      name: "Aphrodite's Boon",
      owned: 0,
      power: 100,
      revealed: false,
      subtext: 'Adds 100 steps per second',
    },
    artemis: {
      base: 25000,
      description: "I'll teach only you and Bouldy my hunting secrets",
      factor: 1.07,
      name: "Artemis' Boon",
      owned: 0,
      power: 250,
      revealed: false,
      subtext: 'Adds 250 steps per second',
    },
    zeus: {
      base: 100000,
      description: 'Rock beats lightning, every time',
      factor: 1.07,
      name: "Zeus's Boon",
      owned: 0,
      power: 500,
      revealed: false,
      subtext: 'Adds 500 steps per second',
    },
    demeter: {
      base: 500000,
      description: 'Though Bouldy weathers on, the harsh winter continues',
      factor: 1.07,
      name: "Demeters's Boon",
      owned: 0,
      power: 1000,
      revealed: false,
      subtext: 'Adds 1000 steps per second',
    },
    chaos: {
      base: 5000000,
      description: "Chaos's blessing does not come easily, even to Bouldy",
      factor: 1.07,
      name: "Chaos's Boon",
      owned: 0,
      power: 2387,
      revealed: false,
      subtext: 'Adds 2387 steps per second',
    },
    daedalus: {
      base: 25000000,
      description: "Can Daedalus forge smoother steps for ol' Bouldy?",
      factor: 1.07,
      name: "Daedalus's Boon",
      owned: 0,
      power: 5000,
      revealed: false,
      subtext: 'Adds 5000 steps per second',
    },
    sisyphus: {
      base: 1000000000,
      description:
        'Sisyphus has been pushing Bouldy for years, surely he can help',
      factor: 1.07,
      name: "Sisyphus' Boon",
      owned: 0,
      power: 10000,
      revealed: false,
      subtext: 'Adds 10000 steps per second',
    },
  } as { [key: string]: Item };

  constructor(private stepsService: StepsService) {}

  load = (items: any) => {
    this.items = items;
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
        item.revealed = true;
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
