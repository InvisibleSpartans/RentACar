import { Component, OnInit } from '@angular/core';

export interface hotelList{
  img_val:string;
  Description:string;
  Seater:number;
  Price:number;
}

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  listval:hotelList[];
  constructor() { }

  ngOnInit() {
    
    this.listval=[
      {"img_val":"a1.JPG","Description":"Mahindra KUV 100 ","Seater":5,"Price":500},
      {"img_val":"a2.JPG","Description":"Ford Figo ","Seater":5,"Price":1000},
      {"img_val":"a3.JPG","Description":"Scorpio","Seater":7,"Price":1500},
   ];
  }

  }
