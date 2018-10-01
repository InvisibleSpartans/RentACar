import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class BookingService {
constructor(private http: HttpClient) {}
postQuestion(form){
    this.http.post('https://localhost:44310/api/booking',
    form).subscribe(res => {
    console.log(res)
    })
}
}