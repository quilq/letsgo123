import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSignout() {
    this.userService.signout(localStorage.getItem('token')).subscribe(response => {
      console.log(response);
      localStorage.removeItem('token');
      this.router.navigate(['/main']);
    })
  }

}
