import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopularPlacesService {

  constructor(private httpClient: HttpClient) { }
  
  getPopularPlaces(){
    let url = `/api/places`;
    return this.httpClient.get<string[]>(url);        
  }
  
}
