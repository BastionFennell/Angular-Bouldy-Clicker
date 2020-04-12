import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });

  it('should update from v1 to v2 correctly', () => {
    const service: ItemService = TestBed.get(ItemService);
    const loadedItems = {
      revealedAfford: {
        base: 10,
        description: 'doot',
        factor: 1.07,
        name: 'Boon',
        owned: 0,
        power: 1,
        revealed: false,
        subtext: 'sub',
      },
      revealedOwned: {
        base: 10,
        description: 'doot',
        factor: 1.07,
        name: 'Boon',
        owned: 1,
        power: 1,
        revealed: false,
        subtext: 'sub',
      },
      unrevealed: {
        base: 100,
        description: 'doot',
        factor: 1.07,
        name: 'Boon',
        owned: 0,
        power: 1,
        revealed: false,
        subtext: 'sub',
      },
    };

    service.load(loadedItems, 1);
    const afford = service.items.revealedAfford;
    const owned = service.items.revealedOwned;
    const unrevealed = service.items.unrevealed;

    expect(afford.revealed).toBeTruthy();
    expect(owned.revealed).toBeTruthy();
    expect(unrevealed.revealed).not.toBeTruthy();
  });
});
