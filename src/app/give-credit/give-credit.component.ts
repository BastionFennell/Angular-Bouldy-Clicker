import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-credit',
  templateUrl: './give-credit.component.html',
  styleUrls: ['./give-credit.component.css'],
})
export class GiveCreditComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<GiveCreditComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
