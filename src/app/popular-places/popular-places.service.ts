import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PopularPlacesService {

  constructor(private httpClient: HttpClient) { }

  getPopularPlaces() {
    let url = `/api/places`;
    return this.httpClient.get<string[]>(url);
  }

  getDeparturePlaces() {
    let url = `/api/from`;
    return this.httpClient.get<string[]>(url);
  }

  getDestinations() {
    let url = `/api/to`;
    return this.httpClient.get<string[]>(url);
  }

}
