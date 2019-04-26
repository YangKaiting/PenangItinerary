import { Component, OnInit } from '@angular/core';
import { navigation, itinerary, content } from '../../model';

@Component({
  selector: 'app-day3-second',
  templateUrl: './day3-second.component.html',
  styleUrls: ['./day3-second.component.css']
})
export class Day3SecondComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Ghee Hiang",
    subtitle: "Estimated time: till dawn",
    img: "./assets/gheehiang.jpg",
    description: "A heritage over 160 years. Originated from Fujian, China since 1856, Ghee Hiang has become an integral part of Penang, Malaysia's colourful heritage and mesmerising traditions.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "216, Jalan Macalister, 10400 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9am - 9pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Tau Sar Piah and beh teh saw are great souvenirs"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/eVHgjnGdPRVRAZ729",
    name: "Open Google Maps"
  }, {
    link: "three/3",
    name: "Check out and then next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
