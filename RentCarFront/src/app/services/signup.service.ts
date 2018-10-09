import{Observable} from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{BehaviorSubject} from '../../../node_modules/rxjs';
import{LoginCallBack} from '../models/LoginCallBack.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class SignupService {

     // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  public loggedIn = false;

constructor(private http: HttpClient, private router:Router) {
}

register(data){
    console.log("service register",data);
var result=this.http.post('https://localhost:44310/api/registration', data)
.subscribe(res => {
  console.log(res);
  });
  console.log(result);
}  
// login(data) {
//     console.log("login service");
//     return this.http
//       .post<LoginCallBack>(
//         'https://localhost:44310/api/auth/login',
//       data).pipe(map(res =>
//         {localStorage.setItem('access_token', res.auth_token);
//         return "true";
//       }));
//   }
//   doLogin(loginData: LoginModel): Observable<string>
//   {
//     var url = "https://localhost:44357/api/Authetication/login"
//     return this.http.post<LoginCallbackModel>(url,loginData).pipe(
//       map(response => {
        
    //     localStorage.setItem('access_token', response.auth_token);
    //     return "true";
    //   }),
    //   catchError(error => {
    //     return throwError( 'Failed' )
    //   }
    //   )
    // )
//   }
}