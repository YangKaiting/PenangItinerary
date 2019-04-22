import { Component, OnInit } from '@angular/core';
import { content, itinerary, navigation } from '../../model';

@Component({
  selector: 'app-day3-first-b',
  templateUrl: './day3-first-b.component.html',
  styleUrls: ['./day3-first-b.component.css']
})
export class Day3FirstBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Wai Kee Char Siew",
    subtitle: "Estimated time: 1.5 hr",
    img: "./assets/waikee.jpg",
    description: "Come before 11am, where there is not much people waiting yet",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Chulia St, Georgetown, 10450 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "10:30am - 2:30pm (usually ends around 1pm when they sell out)"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Char Siew, roasted pork. Come earlier, if you arrive at 11am, waiting time is about 30min"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/V1YhnPKo9vrb8DEa8",
    name: "Open Google Maps"
  }, {
    link: "three/2",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
