import { interval, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StepsService } from './steps.service';
import { ItemService } from './item.service';

import { GiveCreditComponent } from './give-credit/give-credit.component';
import { SettingsComponent } from './settings/settings.component';

import { VERSION } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show = false;

  constructor(
    private stepsService: StepsService,
    private itemService: ItemService,
    public dialog: MatDialog
  ) {}

  title = 'Bouldy Clicker';
  subscription: Subscription;

  ngOnInit() {
    if (localStorage.getItem('version')) {
      this.loadSave();
    }
    const source = interval(100);
    this.subscription = source.subscribe(this.onTick);
  }

  ngAfterViewInit() {
    setTimeout(() => this.openGiveCreditModal());
  }

  openGiveCreditModal = () => {
    this.dialog.open(GiveCreditComponent);
  };

  openSettingsModal = () => {
    this.dialog.open(SettingsComponent, {
      data: {
        clearData: () => {
          this.itemService.clear();
          this.stepsService.clear();
        },
      },
    });
  };

  getSteps = () => this.stepsService.steps;
  getStepsPerSecond = () => this.itemService.getIncrement();

  loadSave = () => {
    const version = parseInt(localStorage.getItem('version'), 10);
    const steps = parseInt(localStorage.getItem('steps'), 10);
    const items = JSON.parse(localStorage.getItem('items'));

    this.stepsService.load(steps);
    this.itemService.load(items, version);
  };

  onTick = (ticks: number) => {
    const tickPower = this.itemService.getIncrement();
    this.stepsService.step(tickPower / 10);
    this.itemService.step(this.stepsService.steps);

    if (ticks % 10 === 0) {
      localStorage.setItem('steps', this.stepsService.steps.toString());
      localStorage.setItem('items', JSON.stringify(this.itemService.items));
      localStorage.setItem('version', VERSION.toString());
    }
  };

  onToggleShow = () => (this.show = !this.show);

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
