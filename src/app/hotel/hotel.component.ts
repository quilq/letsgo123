import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hotel } from './hotel.model';
import { AppState } from '../store/app.reducers';
import * as BookingActions from '../booking/store/booking.actions';
import * as HotelActions from './store/hotel.action';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {

  hotels$: Observable<Hotel[]>;
  hotels: Hotel[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new HotelActions.OnGetHotels());
    this.hotels$ = this.store.select('hotels').pipe(
      map(hotelsState => hotelsState.hotels)
    );
    this.hotels$.subscribe(hotels => this.hotels = hotels);
  }


  bookHotel(hotel: Hotel) {
    let dates = [new Date()];
    this.store.dispatch(new BookingActions.BookHotel({ hotel: hotel, dates: dates }));
  }

  // createHotels(){
  //   this.hotelService.createHotels().subscribe();
  // }

  loadMoreHotels() {
    this.store.dispatch(new HotelActions.OnGetHotels({ skip: this.hotels.length, limit: 5 }));
  }
}
