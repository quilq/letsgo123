import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HotelService } from './hotel.service';
import { BookingState } from './store/booking.reducer';
import { Booking } from './store/booking.models';
import * as BookingActions from './store/booking.actions';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {

  hotels: Hotel[];
  bookings$: Observable<Booking[]>;

  constructor(private hotelService: HotelService,
    private store: Store<BookingState>) {
    this.bookings$ = store.select('booking');
  }

  ngOnInit() {
    this.hotelService.findHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    })
  }

  bookHotel(hotel: Hotel) {
    let dates = [new Date()];
    this.store.dispatch(new BookingActions.BookHotel({ hotel: hotel, dates: dates }))
  }
}
