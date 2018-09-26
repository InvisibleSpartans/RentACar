import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BookingComponent } from './components/booking/booking.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
