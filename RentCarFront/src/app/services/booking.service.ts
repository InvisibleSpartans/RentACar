import{Observable} from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import{BookingDetails} from '../models/BookingDetails.model'
import{carList} from '../models/CarDetail.model'
import { loginIdGetter } from '../app.module';
@Injectable()
export class BookingService {
    distance: number;
    flagBooking=false;
    booking: BookingDetails;

    customersObservable : Observable<carList[]>;
    data: carList;

constructor(private http: HttpClient) {
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

getKms(getdistance)
{
    this.distance=getdistance;
}

getCarDetails():Observable<carList[]>{
    var data=this.http.get<carList[]>('https://localhost:44310/api/cardetails');
    return data;
}

createBooking(data){
    console.log(this.distance);
    this.booking.TotalPrice=this.distance * data.carRate;
    console.log(this.booking.TotalPrice);
    this.booking.CarId=data.id;
    this.booking.IdentityUserId=loginIdGetter();
    console.log("Final Data",JSON.stringify(this.booking));
    this.flagBooking=false;
    this.http.post<any>('https://localhost:44310/api/bookings',
    this.booking).subscribe(res => {
        localStorage.setItem('BookingId',res.id);
        this.flagBooking=true;
    console.log(res)
    })

}
getBookingDetails(id):Observable<any>{
     return this.http.get<any>('https://localhost:44310/api/bookings/'+id);
    // return this.http.get().<  
}
}