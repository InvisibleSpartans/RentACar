import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule,MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule, MatStepperModule,  MatDatepickerModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDetailsComponent } from './components/get-details/get-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    LoginComponent,
    SignupComponent,
    GetDetailsComponent,
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
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
