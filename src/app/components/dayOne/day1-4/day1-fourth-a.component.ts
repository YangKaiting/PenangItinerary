import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day1-fourth-a',
  templateUrl: './day1-fourth-a.component.html',
  styleUrls: ['./day1-fourth-a.component.css']
})
export class Day1FourthAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Komtar - Rainbow Skywalk",
    subtitle: "Estimated time: 1.5 hr",
    img: "./assets/komtarrainbowskywalk.jpg",
    description: "The Komtar Skywalk is the highest outdoor glass sky walk in Malaysia. It is located at the top of Komtar, the tallest skyscraper in George Town, Penang. The horseshoe-shaped cantilever bridge with a glass walkway sits at an elevation of nearly 250 metres above ground.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "1, Jalan Penang, George Town, 10000 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "11am - 9pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Tickets to be purchased from klook"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/SUd4sPSYAP72",
    name: "Open Google Maps"
  }, {
    link: "one/5",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
