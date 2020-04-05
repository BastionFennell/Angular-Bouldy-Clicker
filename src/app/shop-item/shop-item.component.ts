import { Component, Input, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { Item, ItemService } from '../item.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private stepsService: StepsService,
    private itemService: ItemService
  ) {}

  canBuy = () => this.stepsService.steps >= this.getPrice();

  getPrice = () => this.item.base * this.item.factor ** this.item.owned;

  onBuy = () => this.itemService.buy(this.item.name);

  ngOnInit() {}
}
