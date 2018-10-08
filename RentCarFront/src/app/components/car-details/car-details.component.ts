import { Component, OnInit } from '@angular/core';
import{BookingDetails} from '../../models/BookingDetails.model';
import{BookingService} from '../../services/booking.service';
import{carList} from '../../models/CarDetail.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  listval:carList[];


  booking: BookingDetails;

  distance:number;
  distances: number[] = [250, 350, 500, 1000];

  constructor(public api:BookingService,private router: Router) { }

  ngOnInit() {
    
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:''};
    this.booking=this.api.getDetails();   
    this.distance=this.distances[0];
    this.api.getKms(this.distance);
    this.api.getCarDetails().subscribe(data=>this.listval=data);
  }

  // getBookings(){
  //   this.booking=this.api.getDetails();   
  // }

  getdistance(distance)
  {
    this.distance=distance;
    this.api.getKms(distance);
  }


  bookCar(carObj){
    this.api.createBooking(carObj);
    this.router.navigate(['/confirmation']);
  }

  }
