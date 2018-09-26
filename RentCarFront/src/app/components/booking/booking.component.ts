import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @Input() pickUpLoc: string;
  @Input() dropLoc: string;
  @Input() distance:string;
  @Output() pickUpLocChanged = new EventEmitter<string>();
  // @Output() dropLocChanged = new EventEmitter<string>();
  // @Output() distanceLocChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  getPlace()
  {
    console.log("It's working");
  }

}
