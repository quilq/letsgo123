import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  signin(user) {
    let url = 'api/user/signin';
    return this.httpClient.post(url, user, {observe: 'response'})
  }

  signout(token) {
    let url = 'api/user/signout';
    return this.httpClient.delete(url, { headers: { 'x-auth': token } })
  }

  signup(user) {
    let url = 'api/user/signup';
    return this.httpClient.post(url, user, {observe: 'response'});
  }
}
