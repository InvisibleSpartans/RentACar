import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../models/SignUp.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import{SignInService} from '../../services/login.service';
import { BookingService } from '../../services/booking.service';
import{SignupService} from '../../services/signup.service';
import{HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
hide=true;
UserDetails:SignUp;
signUpFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private router: Router, public userService: SignupService) { }

  ngOnInit() {
    this.UserDetails = {FirstName:'', LastName:'',UserName:'',Password:'',Email:''};
    this.signUpFormGroup = this._formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      Password:['', Validators.required],
  });
}
SignUp()
{
  this.userService.register(this.signUpFormGroup.value);
  this.router.navigate(['/login']);
}
}
