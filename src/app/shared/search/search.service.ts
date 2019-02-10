import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tour } from './../../tour/tour.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchTourByAddressAndDate(from: string, to: string, date: Date){
    let url = `/api/search/${from}/${to}/${date}`;
    return this.httpClient.get<Tour[]>(url);
  }

}
