import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day3-first-a',
  templateUrl: './day3-first-a.component.html',
  styleUrls: ['./day3-first-a.component.css']
})
export class Day3FirstAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "local_bar",
    title: "Kraffmen",
    subtitle: "Estimated time: 1 hr",
    img: "../../../assets/kraffmen.jpg",
    description: "One of the best adaptations of a heritage shop-house for a restaurant, music bar and boutique guesthouse situated in the heart of Unesco World Heritage City of Georgetown.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "80 Jalan Zainul Abidin, George Town, Penang Island 10400 Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "10am - 10pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "St Ali (their signature), chicken Palma, home-made kombucha - these are worth a try!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/GsgsE7xaZ9J2",
    name: "Open Google Maps"
  }, {
    link: "three/2",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
