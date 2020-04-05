import { interval, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { StepsService } from './steps.service';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show = false;

  constructor(
    private stepsService: StepsService,
    private itemService: ItemService
  ) {}

  title = 'Bouldy Clicker';
  subscription: Subscription;

  ngOnInit() {
    const source = interval(100);
    this.subscription = source.subscribe(this.onTick);
  }

  onTick = () => {
    const tickPower = this.itemService.getIncrement();
    this.stepsService.step(tickPower / 10);
  };

  onToggleShow = () => (this.show = !this.show);

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
