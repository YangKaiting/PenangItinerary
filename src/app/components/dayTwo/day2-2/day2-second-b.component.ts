import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-second-b',
  templateUrl: './day2-second-b.component.html',
  styleUrls: ['./day2-second-b.component.css']
})
export class Day2SecondBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "The Mugshot Cafe",
    subtitle: "Estimated time: 1.5 hr",
    img: "./assets/themugshotcafe.jpg",
    description: "This cafe serves one of the best bagels and homemade yogurt with various toppings... and mugshots too!",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "302, Chulia St, Georgetown, 10200 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "8am - 12am"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Smoked Salmon & Cream Cheese Bagel for something savoury, or Banana and Nutella Bagel for something sweet! Yoghurt with Jackfruit & Gula Melaka is their signature."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/nRWm4dz979B2",
    name: "Open Google Maps"
  }, {
    link: "two/map",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
