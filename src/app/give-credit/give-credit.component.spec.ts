import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { GiveCreditComponent } from './give-credit.component';

describe('GiveCreditComponent', () => {
  let component: GiveCreditComponent;
  let fixture: ComponentFixture<GiveCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiveCreditComponent],
      imports: [MatButtonModule, MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();
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
