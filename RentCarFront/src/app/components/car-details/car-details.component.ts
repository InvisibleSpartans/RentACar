import { Component, OnInit } from '@angular/core';
import{BookingDetails} from '../../models/BookingDetails.model';
import{BookingService} from '../../services/booking.service';
export interface carList{
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
  listval:carList[];
  booking: BookingDetails;
  constructor(public api:BookingService) { }

  ngOnInit() {
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:''};
    this.booking=this.api.getDetails();
    console.log('Car page Booking',this.api.getDetails(),'vvvvvvv', this.booking);
    this.listval=[
      {"img_val":"a1.JPG","Description":"Mahindra KUV 100 ","Seater":5,"Price":500},
      {"img_val":"a2.JPG","Description":"Ford Figo ","Seater":5,"Price":1000},
      {"img_val":"a3.JPG","Description":"Scorpio","Seater":7,"Price":1500},
   ];
  }

  }
