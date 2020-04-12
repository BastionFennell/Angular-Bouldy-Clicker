import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { getBuyAmount, getPrice } from '../utils';
import { Item } from '../item.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./item-pictures.css', './shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
  @Input() buyAmount: number | string;
  @Input() item: Item;
  @Input() steps: number;
  @Output() onBuyEvent = new EventEmitter<string>();
  url: string;

  constructor() {}

  canBuy = () =>
    this.steps >= getPrice(this.item, this.buyAmount, this.steps) &&
    getPrice(this.item, this.buyAmount, this.steps) !== 0;

  getPrice = () => getPrice(this.item, this.buyAmount, this.steps);

  getAmount = () => getBuyAmount(this.item, this.buyAmount, this.steps);

  onBuy = () => {
    this.onBuyEvent.emit(this.item.id);
  };

  ngOnInit() {}
}
