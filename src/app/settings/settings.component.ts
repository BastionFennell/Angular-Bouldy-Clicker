import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SettingsComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
