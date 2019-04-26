import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-fourth-a',
  templateUrl: './day2-fourth-a.component.html',
  styleUrls: ['./day2-fourth-a.component.css']
})
export class Day2FourthAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Xiang Peng Peng Salted Chicken",
    subtitle: "Estimated time: 1 hr",
    img: "./assets/saltedchicken.jpg",
    description: "The best salted chicken ever in Penang!",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "208B, Jalan Macalister, 10400 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "11:30am - 9pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Salted chicken is a must and their spicy pork is highly raved about too"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/BpiXZJmVa6XnUqkXA",
    name: "Open Google Maps"
  }, {
    link: "two/5",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
