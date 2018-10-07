import{Observable} from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{BehaviorSubject} from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import{LoginCallBack} from '../models/LoginCallBack.model';
import{Login} from '../models/login.model';
import { loginIdGetter } from '../app.module';
@Injectable()
export class SignInService {
  
  loginDetails: LoginCallBack;
  public loggedIn = false;

constructor(private http: HttpClient) {
  this.loginDetails={id:'',auth_token:''};
}
login(data):Observable<LoginCallBack>{
    return this.http
      .post<LoginCallBack>(
        'https://localhost:44310/api/auth/login',
      data).pipe(map(res =>
        {
        localStorage.setItem('access_token', res.auth_token);
        localStorage.setItem('logInId', res.id);
        return res;
      }));
    }

}