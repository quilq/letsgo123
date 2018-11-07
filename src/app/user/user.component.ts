import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  onSignout() {
    this.httpService.signout(localStorage.getItem('token')).subscribe(response => {
      console.log(response);
      localStorage.removeItem('token');
      this.router.navigate(['/main']);
    })
  }

}
