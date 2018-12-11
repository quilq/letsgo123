import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  priceRange = '';
  daysNumber = '';
  luxary = false;
  economy = false;
  tours: Tour[] = [];
  toursToShow: Tour[] = [];
  

  ngOnInit() {
  }

  
  filterByType() {
    if (this.economy && this.luxary) {
      this.toursToShow = this.tours;
    } else if (this.luxary) {
      this.toursToShow = this.tours.filter(tour => tour.tourType.toLowerCase() === 'luxary');
    } else if (this.economy) {
      this.toursToShow = this.tours.filter(tour => tour.tourType.toLowerCase() === 'economy');
    }
  }

  filterByPrice() {
    if (this.priceRange === 'under100') {
      this.toursToShow = this.tours.filter(tour => tour.price < 100)
    } else if (this.priceRange === 'under100') {
      this.toursToShow = this.tours.filter(tour => tour.price >= 100)
    } else {
      this.toursToShow = this.tours;
    }
  }

  filterByDays() {
    if (this.daysNumber === "lessthan3") {
      this.toursToShow = this.tours.filter(tour => tour.journey.length < 3);
    } else if (this.daysNumber === "from3") {
      this.toursToShow = this.tours.filter(tour => tour.journey.length >= 3);
    } else {
      this.toursToShow = this.tours;
    }
  }


}
