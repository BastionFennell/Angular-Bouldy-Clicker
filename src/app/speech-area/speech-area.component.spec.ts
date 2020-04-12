import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechAreaComponent } from './speech-area.component';

describe('SpeechAreaComponent', () => {
  let component: SpeechAreaComponent;
  let fixture: ComponentFixture<SpeechAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
