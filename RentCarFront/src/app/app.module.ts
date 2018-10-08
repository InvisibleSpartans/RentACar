import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatRadioModule,MatSidenavModule,MatGridListModule,MatIconModule,MatToolbarModule, MatNativeDateModule,MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule, MatStepperModule,  MatDatepickerModule} from '@angular/material';
import 'hammerjs';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookingService } from "./services/booking.service";
import{SignInService} from './services/login.service';
import{SignupService} from './services/signup.service';
import {HttpClientModule} from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDetailsComponent } from './components/get-details/get-details.component';
import { HomeComponent } from './components/home/home.component';

import { AgmCoreModule } from '@agm/core';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HeaderComponent } from './components/header/header.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export function loginIdGetter() {
  return localStorage.getItem('logInId');
}
export function bookingIdGetter() {
  return localStorage.getItem('BookingId');
}
const routes: Routes=[
{path:'', component: HomeComponent},
{path:'home', component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'get-details',component:GetDetailsComponent},
{path:'car-details',component:CarDetailsComponent},
{path:'tariff',component:TariffsComponent},
{path:'myBookings',component:MybookingsComponent},
{path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    LoginComponent,
    SignupComponent,
    GetDetailsComponent,
    HomeComponent,
    TariffsComponent,
    MybookingsComponent,
    ConfirmationComponent,
    HeaderComponent
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
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatRadioModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc'
    }),
    HttpClientModule
  ],
  providers: [BookingService,SignupService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
