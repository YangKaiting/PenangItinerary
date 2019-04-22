import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-sixth-a',
  templateUrl: './day2-sixth-a.component.html',
  styleUrls: ['./day2-sixth-a.component.css']
})
export class Day2SixthAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "local_bar",
    title: "Out of Nowhere",
    subtitle: "Estimated time: till dawn",
    img: "./assets/nowhere.jpg",
    description: "You would think that the big orange fridge they have behind the counter is responsible for keeping your milk chilled. Wrong! It’s actually a secret entrance to a hidden bar, Out of Nowhere.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "73, Jalan Kuala Kangsar, George Town, 10100 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "7pm - 12am"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "They have really creative concoctions! Try anything"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/TZSSWzAP5av2JWGX9",
    name: "Open Google Maps"
  }, {
    link: "two/7",
    name: "End of Day 2"
  }]

  constructor() { }

  ngOnInit() {
  }

}
