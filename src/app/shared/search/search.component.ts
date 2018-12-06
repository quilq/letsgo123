import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  from = '';
  to = '';
  date = moment();

  ngOnInit() {
  }

  searchTour(from, to, date) {
    //todo: implement search function
    console.log(from, to, moment(date).format('dddd, MMMM Do YYYY'));
  }

  fromWhere = [
    { value: 'HN', viewValue: 'Ha Noi' },
    { value: 'SG', viewValue: 'Ho Chi Minh City' },
    { value: 'CT', viewValue: 'Can Tho' },
  ];

  toWhere = [
    { value: 'HN', viewValue: 'Ha Noi' },
    { value: 'SG', viewValue: 'Ho Chi Minh City' },
    { value: 'CT', viewValue: 'Can Tho' },
  ];

}
