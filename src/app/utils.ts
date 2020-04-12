import { Item } from './item.service';

export function getPrice(item: Item) {
  const rawPrice = item.base * item.factor ** item.owned;
  return Math.round(rawPrice);
}

export function formatSteps(steps: number) {
  const [smallNumberString, exponentString] = steps.toExponential().split('e');

  const exponent = parseInt(exponentString, 10);
  const smallNumber = parseFloat(smallNumberString);

  if (exponent <= 5) return numberWithCommas(steps.toFixed(0));

  return `${smallNumber.toFixed(3)}${exponent ? ' x 10^' : ''}${exponent}`;
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
