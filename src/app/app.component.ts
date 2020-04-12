import { interval, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StepsService } from './steps.service';
import { ItemService } from './item.service';

import { GiveCreditComponent } from './give-credit/give-credit.component';

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
    setTimeout(() => this.openModal());
  }

  openModal = () => {
    this.dialog.open(GiveCreditComponent);
  };

  getSteps = () => this.stepsService.steps;
  getStepsPerSecond = () => this.itemService.getIncrement();

  loadSave = () => {
    const steps = parseInt(localStorage.getItem('steps'), 10);
    const items = JSON.parse(localStorage.getItem('items'));

    this.stepsService.load(steps);
    this.itemService.load(items);
  };

  onTick = (ticks: number) => {
    const tickPower = this.itemService.getIncrement();
    this.stepsService.step(tickPower / 10);
    this.itemService.step(this.stepsService.steps);

    if (ticks % 10 === 0) {
      localStorage.setItem('steps', this.stepsService.steps.toString());
      localStorage.setItem('items', JSON.stringify(this.itemService.items));
      localStorage.setItem('version', '1');
    }
  };

  onToggleShow = () => (this.show = !this.show);

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
