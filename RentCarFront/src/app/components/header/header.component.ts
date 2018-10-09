import { Component, OnInit } from '@angular/core';
import{loginFlagGetter} from '../../app.module';
import{Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }
loginFlag(){
  return loginFlagGetter();
}
logOut(){
  localStorage.setItem('loginFlag','');
  localStorage.setItem('access_token','');
  localStorage.setItem('logInId','');
  this.router.navigate(['/home']);
}
}
