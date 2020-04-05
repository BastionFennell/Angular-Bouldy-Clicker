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
      description: 'Sometimes, you just wanna party',
      factor: 1.17,
      name: "Dionysus' Boon",
      owned: 0,
      power: 1,
      subtext: 'Adds 1 step per second',
    },
    poseidon: {
      base: 100,
      description: 'Broseidon, King of the Brocean',
      factor: 1.17,
      name: "Poseidon's Boon",
      owned: 0,
      power: 10,
      subtext: 'Adds 10 steps per second',
    },
    aphrodite: {
      base: 1000,
      description: 'If you wanna be my lover',
      factor: 1.17,
      name: "Aphrodite's Boon",
      owned: 0,
      power: 25,
      subtext: 'Adds 25 steps per second',
    },
    zeus: {
      base: 10000,
      description: 'The blessings of the all-mighty Zeus!',
      factor: 1.17,
      name: "Zeus's Boon",
      owned: 0,
      power: 100,
      subtext: 'Adds 100 steps per second',
    },
    nectar_test: {
      base: 10,
      description: 'Show Bouldy you really care!',
      factor: 1.17,
      name: 'Nectar',
      owned: 0,
      power: 0,
      subtext: 'Adds 1 step per click',
    },
    dionysus_test: {
      base: 10,
      description: 'Sometimes, you just wanna party',
      factor: 1.17,
      name: "Dionysus' Boon",
      owned: 0,
      power: 1,
      subtext: 'Adds 1 step per second',
    },
    poseidon_test: {
      base: 100,
      description: 'Broseidon, King of the Brocean',
      factor: 1.17,
      name: "Poseidon's Boon",
      owned: 0,
      power: 10,
      subtext: 'Adds 10 steps per second',
    },
    aphrodite_test: {
      base: 1000,
      description: 'If you wanna be my lover',
      factor: 1.17,
      name: "Aphrodite's Boon",
      owned: 0,
      power: 25,
      subtext: 'Adds 25 steps per second',
    },
    zeus_test: {
      base: 10000,
      description: 'The blessings of the all-mighty Zeus!',
      factor: 1.17,
      name: "Zeus's Boon",
      owned: 0,
      power: 100,
      subtext: 'Adds 100 steps per second',
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
