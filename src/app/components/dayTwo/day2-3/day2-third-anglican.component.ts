import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-anglican',
  templateUrl: './day2-third-anglican.component.html',
  styleUrls: ['./day2-third-anglican.component.css']
})
export class Day2ThirdAnglicanComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "St. George's Anglican Church",
    subtitle: "5min",
    img: "./assets/stgeorgechurch.jpg",
    description: "St. George's Church is a 19th-century Anglican church in the city of George Town in Penang, Malaysia. It is the oldest purpose built Anglican church in Southeast Asia. The church lies within the jurisdiction of the Upper North Archedeaconry of the Anglican Diocese of West Malaysia.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "1, Lebuh Farquhar, George Town, 10200 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "Monday-Thursday ONLY -- 9am - 3pm, Sunday Service at 0830, 1030 and 1045"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The oldest Hindu temple in Penang, Sri Mahamariamman Temple is located here."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/Sfq2xBjtDL92EdMm7",
    name: "Open Google Maps"
  }, {
    link: "https://www.stgeorgeschurchpenang.com/index.php/about/the-history.html",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
