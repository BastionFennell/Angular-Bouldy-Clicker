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
      factor: 1.17,
      name: 'Nectar',
      owned: 0,
      power: 0,
      subtext: 'Adds 1 step per click',
    },
    dionysus: {
      base: 10,
      description:
        'Sometimes, you just wanna party with your best friend, Bouldy',
      factor: 1.17,
      name: "Dionysus' Boon",
      owned: 0,
      power: 1,
      subtext: 'Adds 1 step per second',
    },
    athena: {
      base: 25,
      description:
        "The wise goddess understands the true value of Bouldy's patience",
      factor: 1.17,
      name: "Athena's Boon",
      owned: 0,
      power: 10,
      subtext: 'Adds 10 step per second',
    },
    poseidon: {
      base: 100,
      description:
        'Maybe some extra knockback will help getting Bouldy up the steps?',
      factor: 1.17,
      name: "Poseidon's Boon",
      owned: 0,
      power: 25,
      subtext: 'Adds 25 steps per second',
    },
    ares: {
      base: 500,
      description: 'Even the god of war has a soft spot for Bouldy',
      factor: 1.17,
      name: "Ares' Boon",
      owned: 0,
      power: 50,
      subtext: 'Adds 50 steps per second',
    },
    aphrodite: {
      base: 1000,
      description:
        'Bouldy may be playing hard to get, but Aphrodite is also patient',
      factor: 1.17,
      name: "Aphrodite's Boon",
      owned: 0,
      power: 100,
      subtext: 'Adds 100 steps per second',
    },
    artemis: {
      base: 5000,
      description: "I'll teach only you and Bouldy my hunting secrets",
      factor: 1.17,
      name: "Artemis' Boon",
      owned: 0,
      power: 250,
      subtext: 'Adds 250 steps per second',
    },
    zeus: {
      base: 10000,
      description: 'Rock beats lightning, every time',
      factor: 1.17,
      name: "Zeus's Boon",
      owned: 0,
      power: 500,
      subtext: 'Adds 500 steps per second',
    },
    demeter: {
      base: 50000,
      description: 'Though Bouldy weathers on, the harsh winter continues',
      factor: 1.17,
      name: "Demeters's Boon",
      owned: 0,
      power: 1000,
      subtext: 'Adds 1000 steps per second',
    },
    chaos: {
      base: 1000000,
      description: "Chaos's blessing does not come easily, even to Bouldy",
      factor: 1.17,
      name: "Chaos's Boon",
      owned: 0,
      power: 2387,
      subtext: 'Adds 2387 steps per second',
    },
    daedalus: {
      base: 2000000,
      description: "Can Daedalus forge smoother steps for ol' Bouldy?",
      factor: 1.17,
      name: "Daedalus's Boon",
      owned: 0,
      power: 5000,
      subtext: 'Adds 5000 steps per second',
    },
    sisyphus: {
      base: 5000000,
      description:
        'Sisyphus has been pushing Bouldy for years, surely he can help',
      factor: 1.17,
      name: "Sisyphus' Boon",
      owned: 0,
      power: 10000,
      subtext: 'Adds 10000 steps per second',
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
