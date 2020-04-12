import { Component, Input, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';
import { Item, ItemService } from '../item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @Input() show: boolean;
  @Input() onToggleShow: () => void;
  buyAmount = 1 as number | string;
  itemMemoCheck: { [key: string]: Item };
  itemMemo: Item[];
  revealedItemMemo: Item[];
  unrevealedItemMemo: Item[];

  constructor(
    private stepsService: StepsService,
    private itemService: ItemService
  ) {}

  ngOnInit() {}

  getRevealedItems = () => {
    return Object.entries(this.itemService.items)
      .filter(([key, value]) => value.revealed)
      .map(([key, value]) => ({
        id: key,
        ...value,
      }));
  };

  getUnrevealedItems = () => {
    return Object.entries(this.itemService.items)
      .filter(([key, value]) => !value.revealed)
      .slice(0, 2)
      .map(([key, value]) => ({
        id: key,
        ...value,
      }));
  };

  getItems = () => {
    if (this.itemMemoCheck !== this.itemService.items) {
      this.itemMemoCheck = this.itemService.items;
      this.itemMemo = this.getRevealedItems().concat(this.getUnrevealedItems());
    }

    return this.itemMemo;
  };
  getSteps = () => this.stepsService.steps;
  getStepsPerSecond = () => this.itemService.getIncrement();
  onChangeBuyAmount = (amount: number | string) => (this.buyAmount = amount);
  onBuy = (item: string) => this.itemService.buy(item);
}
