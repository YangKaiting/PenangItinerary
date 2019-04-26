import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day3-fifth-a',
  templateUrl: './day3-fifth-a.component.html',
  styleUrls: ['./day3-fifth-a.component.css']
})
export class Day3FifthAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Hameediyah Restaurant",
    subtitle: "Leave by 6:00pm",
    img: "./assets/hameediyah.jpg",
    description: "Nasi Kandar originates from Penang, and here at this 109-year-old eatery you can find the best Nasi Kandar in Malaysia",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Lebuh Campbell, George Town, 10100 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "10am - 10:30pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Check out on the beef rendang!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/qad6ZZK6DQF37Rvk7",
    name: "Open Google Maps"
  }, {
    link: "three/6",
    name: "Goodbye~"
  }]

  constructor() { }

  ngOnInit() {
  }

}
