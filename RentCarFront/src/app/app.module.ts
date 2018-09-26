import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule,} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
