import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient) { }

  findHotels(skip: number = 0, limit: number = 5) {
    let url = `/api/${skip}/${limit}`;
    console.log('findHotels called!');
    return this.httpClient.get<Hotel[]>(url);
  }

  // createHotels(){
  //   return this.httpClient.post('/api/new', {});
  // }
}
