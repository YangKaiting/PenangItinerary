import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-sixth-b',
  templateUrl: './day2-sixth-b.component.html',
  styleUrls: ['./day2-sixth-b.component.css']
})
export class Day2SixthBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "local_bar",
    title: "Arena club Penang",
    subtitle: "Estimated time: till dawn",
    img: "../../../assets/arena.jpg",
    description: "This is the largest club in Penang, with the best lightning. Rated 4.2 stars on Google Reviews",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "130, Jalan Penang, George Town, 10000 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "4pm - 1am"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/c48nHkWrthrSe9fL7",
    name: "Open Google Maps"
  }, {
    link: "two/7",
    name: "End of Day 2"
  }]

  constructor() { }

  ngOnInit() {
  }

}
