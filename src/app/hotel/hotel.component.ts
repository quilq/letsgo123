import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.findHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
      console.log(this.hotels);
    })
  }



}
