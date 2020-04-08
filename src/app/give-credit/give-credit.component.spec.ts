import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveCreditComponent } from './give-credit.component';

describe('GiveCreditComponent', () => {
  let component: GiveCreditComponent;
  let fixture: ComponentFixture<GiveCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
