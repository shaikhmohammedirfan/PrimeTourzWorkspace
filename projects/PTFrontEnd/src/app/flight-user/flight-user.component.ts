import { Component, OnInit } from '@angular/core';
import { HotelapiService } from '../services/APIs/hotelapi.service';

@Component({
  selector: 'app-flight-user',
  templateUrl: './flight-user.component.html',
  styleUrls: ['./flight-user.component.scss']
})
export class FlightUserComponent implements OnInit {
flights;
totalflights;
  constructor(private flightservice: HotelapiService) { }

  ngOnInit(): void {
    this.flightservice.loadHotelByCity('Makkah').subscribe(
      (data) => {
        this.flights = data;

        this.totalflights = this.flights.length;
        console.log(this.flights);
        this.testForLoop(this.flights);
      }
    );

  }
 testForLoop(hotels): void {

  let i;
  for (i = 1; i < hotels.length; i++) {
    if (hotels[i].hotelcode === 'A002') {
      console.log('hotelcode = ' , hotels[i].hotelcode);
    }

}
 }

}
