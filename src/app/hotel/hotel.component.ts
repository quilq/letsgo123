import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BookingState } from '../booking/store/booking.reducer';
import { Booking } from '../booking/booking.model';
import * as BookingActions from '../booking/store/booking.actions';
import * as HotelActions from './store/hotel.action';
import { HotelsState } from './store/hotel.reducer';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {

  hotels$: Observable<Hotel[]>;
  hotels: Hotel[] = [];

  constructor(private bookingStore: Store<BookingState>,
    private hotelStore: Store<HotelsState>) {
    this.hotels$ = hotelStore.select('hotels');
  }
  
  ngOnInit() {
    this.hotelStore.dispatch(new HotelActions.OnGetHotels());
    this.hotels$.subscribe (hotels => {
      this.hotels = hotels;
    });
  }

  bookHotel(hotel: Hotel) {
    let dates = [new Date()];
    this.bookingStore.dispatch(new BookingActions.BookHotel({ hotel: hotel, dates: dates }));
  }

  // createHotels(){
  //   this.hotelService.createHotels().subscribe();
  // }

  loadMoreHotels(){
    this.hotelStore.dispatch(new HotelActions.OnGetHotels({skip: this.hotels.length, limit: 5}));
  }
}
