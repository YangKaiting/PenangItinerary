import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day3-fourth-a',
  templateUrl: './day3-fourth-a.component.html',
  styleUrls: ['./day3-fourth-a.component.css']
})
export class Day3FourthAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Upside Down Museum",
    subtitle: "Estimated time: 1.5 hr",
    img: "../../../assets/upsidedown.jpg",
    description: "A place where everything else is turned... upside down",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "45, Lebuh Kimberley, George Town, 10100 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9am - 6:30pm"
  }, {
    iconName: "star_border",
    label: "Entrance Fee",
    details: "Adults: RM 27/pax"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/B9c2b6qSgstjwJk76",
    name: "Open Google Maps"
  }, {
    link: "three/5",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
