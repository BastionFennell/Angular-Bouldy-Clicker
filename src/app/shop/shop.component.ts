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
  itemMemoCheck: { [key: string]: Item };
  itemMemo: Item[];

  constructor(
    private stepsService: StepsService,
    private itemService: ItemService
  ) {}

  ngOnInit() {}

  getItems = () => {
    if (this.itemService.items !== this.itemMemoCheck) {
      this.itemMemoCheck = this.itemService.items;
      this.itemMemo = Object.entries(this.itemService.items).map(
        ([key, value]) => ({
          id: key,
          ...value,
        })
      );
    }

    return this.itemMemo;
  };
  getSteps = () => this.stepsService.steps;
  getStepsPerSecond = () => this.itemService.getIncrement();
  onBuy = (item: string) => this.itemService.buy(item);
}
