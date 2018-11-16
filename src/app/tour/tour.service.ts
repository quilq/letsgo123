import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tour } from './tour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  findTours(skip: number = 0, limit: number = 5) {
    let url = `/api/${skip}/${limit}`;
    console.log('findTours called!');
    return this.httpClient.get<Tour[]>(url);
  }

}
