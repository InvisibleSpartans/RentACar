import {Component,OnInit} from '@angular/core';
import { Login } from '../../models/login.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SignInService } from '../../services/login.service';
import { tokenGetter, loginIdGetter } from '../../app.module';
import { LoginCallBack } from '../../models/LoginCallBack.model';
/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  hide = true;
  LoginDetails:LoginCallBack;
  LoginFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private router: Router,public api:SignInService) { }

  ngOnInit() {
    this.LoginDetails = {id:'',auth_token:''};
    this.LoginFormGroup = this._formBuilder.group({
      UserName: ['', Validators.required],
      Password:['', Validators.required],
  });
  }
  Login()
  {    
    this.api.login(this.LoginFormGroup.value).subscribe(data =>console.log(data));
  }
}
