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

const itemUpdate = [
  (items: { [key: string]: Item }) => items,
  (items: { [key: string]: Item }, steps: number) => {
    const keys = Object.keys(items);
    let newItems = Object.assign({}, items);

    for (let i = 0; i < keys.length; i++) {
      const item = newItems[keys[i]];
      if (item.owned || steps >= item.base) {
        newItems = {
          ...newItems,
          [keys[i]]: {
            ...item,
            revealed: true,
          },
        };
      }
    }

    return newItems;
  },
];

export function updateItemsToVersion(
  items: { [key: string]: Item },
  currentVersion: number,
  newVersion: number,
  steps: number
) {
  let newItems = items;
  for (let i = currentVersion; i < newVersion; i++) {
    newItems = itemUpdate[i](newItems, steps);
  }
  console.log(newItems);

  return newItems;
}
