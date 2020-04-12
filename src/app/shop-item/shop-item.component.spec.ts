import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemComponent } from './shop-item.component';

describe('ShopItemComponent', () => {
  let component: ShopItemComponent;
  let fixture: ComponentFixture<ShopItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemComponent);
    component = fixture.componentInstance;
    component.item = {
      base: 10,
      description: 'Show Bouldy you really care!',
      factor: 1.07,
      name: 'Nectar',
      owned: 0,
      power: 0,
      revealed: false,
      subtext: 'Adds 1 step per click',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
