import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-second-a',
  templateUrl: './day2-second-a.component.html',
  styleUrls: ['./day2-second-a.component.css']
})
export class Day2SecondAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "pets",
    title: "Corgi and the Gang Pet Cafe",
    subtitle: "Estimated time: 1.5 hr",
    img: "../../../assets/corgipetcafe.jpg",
    description: "It's the corgis that matter!",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "102-E-7, New World Park, George Town, 10050 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9:30am - 9:30pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Smoothies are refreshing :)"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/m2Tqf6JeGAN2",
    name: "Open Google Maps"
  }, {
    link: "two/map",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
