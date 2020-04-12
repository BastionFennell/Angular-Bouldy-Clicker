import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';

import { events, speakers } from './constants';

@Component({
  selector: 'app-speech-area',
  templateUrl: './speech-area.component.html',
  styleUrls: ['./speech-area.component.css'],
})
export class SpeechAreaComponent implements OnInit {
  event: any;
  speaker: any;

  @Input() clearData: () => void;
  constructor(
    public dialogRef: MatDialogRef<SpeechAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.event = events[this.data.eventOwner][this.data.eventName];
    this.speaker = speakers[this.event.speaker];

    const audio = new Audio('assets/' + this.event.audio);
    audio.play();
  }
}
