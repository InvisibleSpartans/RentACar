import { Component, OnInit } from '@angular/core';
import{BookingService} from '../../services/booking.service';
import{carList} from '../../models/CarDetail.model';
import{HeaderComponent} from '../header/header.component';
// export interface carList{
//   img_val:string;
//   Description:string;
//   Seater:number;
//   Price:number;
// }
@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.css']
})
export class TariffsComponent implements OnInit {
  listval:carList[];
  constructor(public api:BookingService) { }

  ngOnInit() {
    this.api.getCarDetails().subscribe(data=>this.listval=data);
  //   this.listval=[
  //     {"img_val":"a1.JPG","Description":"Mahindra KUV 100 ","Seater":5,"Price":20},
  //     {"img_val":"a2.JPG","Description":"Ford Figo ","Seater":5,"Price":20},
  //     {"img_val":"a3.JPG","Description":"Scorpio","Seater":7,"Price":30},
  //  ];
  }

}
