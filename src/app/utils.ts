import { Item } from './item.service';

export function getPrice(item: Item) {
  const rawPrice = item.base * item.factor ** item.owned;
  return Math.round(rawPrice);
}
