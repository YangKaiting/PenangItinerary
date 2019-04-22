import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../../model';

@Component({
  selector: 'app-day2-first-b',
  templateUrl: './day2-first-b.component.html',
  styleUrls: ['./day2-first-b.component.css']
})
export class Day2FirstBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Sister Curry Mee",
    subtitle: "Estimated time: 30 min",
    img: "./assets/sistercurrymee.jpg",
    description: "This is 73-year-old business run by a pair of Penang sisters, selling heartwarming bowls of curry mee.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "612 T, Jalan Air Itam, Pekan Ayer Itam, 11500 Ayer Itam, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "730am - 1pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Share a bowl!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/aWoAfytDmYv",
    name: "Open Google Maps"
  }, {
    link: "two/1b1",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
