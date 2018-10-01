import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
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
    console.log(this.firstFormGroup.value);
  }

 form2(){
    console.log(this.secondFormGroup.value);
  }

form3(){
    console.log(this.thirdFormGroup.value);
  }

}
