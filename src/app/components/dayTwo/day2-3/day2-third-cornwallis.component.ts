import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-cornwallis',
  templateUrl: './day2-third-cornwallis.component.html',
  styleUrls: ['./day2-third-cornwallis.component.css']
})
export class Day2ThirdCornwallisComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Fort Cornwallis, Lebuh Light",
    subtitle: "15min",
    img: "./assets/fortcornwallis.jpg",
    description: "Fort Cornwallis is the largest standing fort in Malaysia. Set close to the Esplanade and Penang Clocktower, the star-shaped bastion is one of the oldest structures in Penang. Named after Marquis Charles Cornwallis, only a set of ten-foot high outer walls remain, with an enclosed park within.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Georgetown, 10200 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9am – 6:30pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "The famous canon can be seen from outside of the walls. Save up on the entrance fee!"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "Fort Cornwallis is in a shape of a star. this design was a better defence against multiple fields of fire from enemies."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/6i97AS9NKAfg4PhaA",
    name: "Open Google Maps"
  }, {
    link: "http://www.penang.ws/penang-attractions/fort-cornwallis.htm",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
