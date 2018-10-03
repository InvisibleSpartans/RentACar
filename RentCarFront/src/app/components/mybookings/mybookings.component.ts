import { Component, OnInit } from '@angular/core';
export interface carList{
  Id : number;
  Description : string;
  Pickup_city : string;
  Pickup_address : string;
  Drop_city: string;
  Drop_address:string;
  Pickup_date?:Date;
  Drop_date?:Date;
  Price: number;
}
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  listval:carList[];
  constructor() { }

  ngOnInit() {
    this.listval=[
      {"Id":1,"Description":"Mahindra KUV 100","Pickup_city":"Visakhapatnam","Pickup_address":"RK BEACH","Drop_city":"Delhi","Drop_address":"Sahara Mall","Price":600},
      {"Id":2,"Description":"Mahindra TUV 100","Pickup_city":"Delhi","Pickup_address":"Sahara Mall","Drop_city":"Visakhapatnam","Drop_address":"RK Beach","Price":1200},
   ];
  }
}

