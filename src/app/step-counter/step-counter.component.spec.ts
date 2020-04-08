import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCounterComponent } from './step-counter.component';

describe('StepCounterComponent', () => {
  let component: StepCounterComponent;
  let fixture: ComponentFixture<StepCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
