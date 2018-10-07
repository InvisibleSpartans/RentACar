import{Observable} from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import{BookingDetails} from '../models/BookingDetails.model'
import{carList} from '../models/CarDetail.model'
import { loginIdGetter } from '../app.module';
@Injectable()
export class BookingService {
    distance: number;

    booking: BookingDetails;

    customersObservable : Observable<carList[]>;
    data: carList;

constructor(private http: HttpClient) {
    this.distance=150;
    this.booking = {Pickup_city:'', Pickup_address:'',Drop_city:'',Drop_address:''};
}

sendDetails(form){
    console.log("service form", form);
    this.booking=form;
    console.log("service",this.booking);
}

getDetails(){
    return this.booking;
}

getCarDetails():Observable<carList[]>{
    var data=this.http.get<carList[]>('https://localhost:44310/api/cardetails');
    return data;
}

createBooking(data){
    this.booking.TotalPrice=this.distance * data.carRate;
    this.booking.CarId=data.id;
    this.booking.IdentityUserId=loginIdGetter();
    console.log("Final Data",JSON.stringify(this.booking));
    this.http.post('https://localhost:44310/api/bookings',
    this.booking).subscribe(res => {
    console.log(res)
    })
    console.log("Ho gya");
}
}