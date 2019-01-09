import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}

  onLoginPage = false;
  sideNavOpen = false;

  ngOnInit() { }

  onActivate(){
    let url = this.router.url;
    if (url === '/signin' || url === '/signup'){
      this.onLoginPage = true;
    } else {
      this.onLoginPage = false;
    }
  }

  onOpenedSideNav(opened: boolean){
    this.sideNavOpen = opened;
  }

}
