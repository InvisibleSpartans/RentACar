import { Component, OnInit } from '@angular/core';
import { BookingDetails } from '../../models/BookingDetails.model';
import  {BookingService} from '../../services/booking.service';
import{bookingIdGetter} from '../../app.module';
import{HeaderComponent} from '../header/header.component';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  booking: any;
  flag:boolean;
  constructor(public api:BookingService) { }

  ngOnInit() {
    this.flag=false;
    console.log("confirmation");
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:'',Pickup_date:'',Drop_date:'',CarId:0,TotalPrice:0};
    setTimeout(() => {
    console.log("Inside");
      if(this.api.flagBooking)
      {  var bookingId = bookingIdGetter();
        console.log("book",bookingId);
      this.api.getBookingDetails(bookingId).subscribe(data=> {
        console.log("book serervice",data);
        this.booking = data;
        console.log("book value", this.booking);
        this.flag = true;
      });
    }  

  }, 5000);
  }

}
