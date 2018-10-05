import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 28.4726934;
  lng: number = 77.0546059;
  constructor() { }

  ngOnInit() {
  }

}
