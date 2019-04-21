import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day1-fifth-b',
  templateUrl: './day1-fifth-b.component.html',
  styleUrls: ['./day1-fifth-b.component.css']
})
export class Day1FifthBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "local_bar",
    title: "Burger Bakar Penang",
    subtitle: "Estimated time: 2 hrs",
    img: "./assets/burgerbakar.JPG",
    description: "Best burger in town! Not the best hygience standard though :P",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "126, Lebuh Sungai Pinang, George Town, 10150 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "6:30pm - 12am"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Chicken patty is better than beef patty, definitely have to add the cheese"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/aFdde6XwuKJ3Lyq57",
    name: "Open Google Maps"
  }, {
    link: "one/6",
    name: "End of Day 1"
  }]

  constructor() { }

  ngOnInit() {
  }

}
