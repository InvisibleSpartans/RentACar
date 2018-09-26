import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  checked = false;
  constructor() { }

  ngOnInit() {
  }

  getPlace()
  {
    console.log("It's working");
  }

}
