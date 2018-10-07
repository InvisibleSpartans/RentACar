import { Component, OnInit } from '@angular/core';
import{BookingDetails} from '../../models/BookingDetails.model';
import{BookingService} from '../../services/booking.service';
import{carList} from '../../models/CarDetail.model';
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
    this.api.getCarDetails().subscribe(data=>this.listval=data);

  }
  bookCar(carObj){
    this.api.createBooking(carObj);
  }
  }
