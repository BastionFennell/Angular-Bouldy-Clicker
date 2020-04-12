import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StepsService } from '../steps.service';
import { Item, ItemService } from '../item.service';
import { getBuyAmount } from '../utils';
import { SpeechAreaComponent } from '../speech-area/speech-area.component';

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
    private itemService: ItemService,
    public dialog: MatDialog
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
  onBuy = (item: string) => {
    const itemData = this.itemService.items[item];

    if (itemData.owned === 0) {
      this.dialog.open(SpeechAreaComponent, {
        panelClass: 'invisible',
        data: {
          eventOwner: item,
          eventName: 'intro',
        },
      });
    }

    this.itemService.buy(
      item,
      getBuyAmount(itemData, this.buyAmount, this.stepsService.steps)
    );
  };
}
