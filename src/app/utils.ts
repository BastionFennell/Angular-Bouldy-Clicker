import { Item } from './item.service';

export function getPrice(item: Item) {
  return item.base * item.factor ** item.owned;
}
