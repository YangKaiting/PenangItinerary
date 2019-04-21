import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day1-fifth-a',
  templateUrl: './day1-fifth-a.component.html',
  styleUrls: ['./day1-fifth-a.component.css']
})
export class Day1FifthAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "local_bar",
    title: "Chulia Court The Tavern",
    subtitle: "Estimated time: 2 hrs",
    img: "./assets/chulia-court",
    description: "one of the best adaptations of a heritage shop-house for a restaurant, music bar and boutique guesthouse situated in the heart of Unesco World Heritage City of Georgetown.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "355,357&359, Chulia St, Georgetown, 10200 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "12pm - 3am"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Amazing crab laksa!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/DKR2f7VShgx",
    name: "Open Google Maps"
  }, {
    link: "one/6",
    name: "End of Day 1"
  }]

  constructor() { }

  ngOnInit() {
  }

}
