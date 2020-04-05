import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { StepsService } from '../steps.service';
import { ItemService } from '../item.service';

@Component({
  animations: [
    trigger('clicked', [
      transition('* => true', [
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'rotate(5deg)' }),
            style({ transform: 'rotate(0deg)' }),
            style({ transform: 'rotate(-5deg)' }),
            style({ transform: 'rotate(0deg)' }),
          ])
        ),
      ]),
    ]),
  ],
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  clicked = false;
  constructor(
    private stepsService: StepsService,
    private itemService: ItemService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}
  onClick() {
    this.clicked = false;
    this.changeDetectorRef.detectChanges();
    this.stepsService.step(this.itemService.getClickPower());
    this.clicked = true;
  }
}
