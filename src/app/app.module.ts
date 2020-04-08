import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { GiveCreditComponent } from './give-credit/give-credit.component';
import { StepCounterComponent } from './step-counter/step-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    ShopComponent,
    ShopItemComponent,
    GiveCreditComponent,
    StepCounterComponent,
  ],
  entryComponents: [GiveCreditComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
