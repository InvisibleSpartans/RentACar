import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BookingService } from "./../../services/booking.service";
import { BookingDetails } from "../../models/BookingDetails.model";
import {Router} from '@angular/router';
@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  checked = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  lat: number = 51.678418;
  lng: number = 7.809007;
  booking: BookingDetails;
  constructor(private _formBuilder: FormBuilder,public api: BookingService, private router: Router
  ) { }

  ngOnInit() {
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:''};
    this.firstFormGroup = this._formBuilder.group({
      Pickup_city: ['', Validators.required],
      Pickup_address: ['', Validators.required],
      Drop_city: ['', Validators.required],
      Drop_address: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Pickup_date: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      Drop_date: ['', Validators.required]
    });
  }

  getPlace()
  {
    console.log("It's working");
  }
  
  form1(){
    
  console.log(this.firstFormGroup.get('Pickup_city').value);
    console.log(this.firstFormGroup.value);
  }

 form2(){
    console.log(this.secondFormGroup.value);
  }

form3(){
  this.booking.Pickup_city=this.firstFormGroup.get('Pickup_city').value;
  this.booking.Pickup_address=this.firstFormGroup.get('Pickup_address').value;
  this.booking.Drop_city=this.firstFormGroup.get('Drop_city').value;
  this.booking.Drop_address=this.firstFormGroup.get('Drop_address').value;
  this.booking.Pickup_date=this.secondFormGroup.get('Pickup_date').value;
  this.booking.Drop_date=this.thirdFormGroup.get('Drop_date').value;
  console.log("form3",this.booking);
  this.api.postQuestion(this.booking);
  this.router.navigate(['/car-details']);
  }

}
