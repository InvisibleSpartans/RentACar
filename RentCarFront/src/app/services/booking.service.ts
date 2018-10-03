import{Observable} from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import{BookingDetails} from '../models/BookingDetails.model'
import{carList} from '../models/CarDetail.model'
@Injectable()
export class BookingService {
    booking: BookingDetails;
    customersObservable : Observable<carList[]>;

constructor(private http: HttpClient) {
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:''};
}
sendDetails(form){
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
getCarDetails():Observable<carList[]>{
    var data=this.http.get<carList[]>('https://localhost:44310/api/cardetails'); 
    return data;
}
}