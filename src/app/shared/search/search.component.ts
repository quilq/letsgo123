import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  date: Date;

  ngOnInit() {
  }

  searchTour(from, to, date){
    console.log(from, to, date);
  }

  departures = [
    {value: 'Citi 11', viewValue: 'Citi 12'},
    {value: 'Citi 21', viewValue: 'Citi 22'},
    {value: 'Citi 31', viewValue: 'Citi 32'}
  ];

  arrivals = [
    {value: 'Citi 41', viewValue: 'Citi 42'},
    {value: 'Citi 51', viewValue: 'Citi 52'},
    {value: 'Citi 61', viewValue: 'Citi 62'}
  ];

}
