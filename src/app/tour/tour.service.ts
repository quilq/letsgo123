import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tour } from './tour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  findTours(skip: number = 0, limit: number = 20) {
    let url = `/api/tour/${skip}/${limit}`;
    return this.httpClient.get<Tour[]>(url);
  }

  findDiscountedTours() {
    let url = `/api/discount`;
    return this.httpClient.get<Tour[]>(url);
  }

  findTourByID(id: string){
    let url = `/api/id/${id}`;
    return this.httpClient.get<Tour>(url);
  }

  findTourByAddress(address: string){
    let url = `/api/address/${address}`;
    return this.httpClient.get<Tour[]>(url);
  }

  addNewTour(){
    let url = `/api/tour/new`;
    console.log('findTours called!');
    return this.httpClient.post(url, '');
  }

}
