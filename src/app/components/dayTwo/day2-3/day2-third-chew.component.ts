import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-chew',
  templateUrl: './day2-third-chew.component.html',
  styleUrls: ['./day2-third-chew.component.css']
})
export class Day2ThirdChewComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Chew Jetty",
    subtitle: "45min",
    img: "../../../assets/chewjetty.jpg",
    description: "The largest and most intact of the clan jetties, Chew Jetty consists of 75 elevated houses, several Chinese temples, a community hall and lots of tourist facilities, all linked by elevated wooden walkways.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Chew Jetty, Weld Quay, 10300 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9am – 9pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Arrive towards sunset to take 'golden-hour' photos from the end of the jetty (you'll be in good company). For a more authentic experience, explore the less touristy jetties to the southwest: Lee Jetty, New Jetty and Yeoh Jetty."
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "There used to be seven jetties until one was demolished by fire and now six remain."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/WMt4Z6e3vFacobEW7",
    name: "Open Google Maps"
  }, {
    link: "http://www.penang.ws/penang-attractions/clan-jetties.htm",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
