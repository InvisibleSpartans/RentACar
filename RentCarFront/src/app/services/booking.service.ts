import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import{BookingDetails} from '../models/BookingDetails.model'
@Injectable()
export class BookingService {
    booking: BookingDetails;
constructor(private http: HttpClient) {
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:''};
}
postQuestion(form){
    console.log("service form", form);
    this.booking=form;
    console.log("service",this.booking);
    // this.http.post('https://localhost:44310/api/booking',
    // form).subscribe(res => {
    // console.log(res)
    // })
}
getDetails(){
    return this.booking;
}
}