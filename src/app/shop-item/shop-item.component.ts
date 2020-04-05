import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { getPrice } from '../utils';
import { Item } from '../item.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
  @Input() item: Item;
  @Input() steps: number;
  @Output() onBuyEvent = new EventEmitter<string>();
  constructor() {}

  canBuy = () => this.steps >= getPrice(this.item);

  getPrice = () => getPrice(this.item);

  onBuy = () => {
    this.onBuyEvent.emit(this.item.id);
  };

  ngOnInit() {}
}
