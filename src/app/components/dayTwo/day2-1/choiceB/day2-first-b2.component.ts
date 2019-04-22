import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from 'src/app/components/model';

@Component({
  selector: 'app-day2-first-b2',
  templateUrl: './day2-first-b2.component.html',
  styleUrls: ['./day2-first-b2.component.css']
})
export class Day2FirstB2Component implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Air Itam Laksa",
    subtitle: "Estimated time: 30 min",
    img: "./assets/airhitamlaksa.jpg",
    description: "Here you can find the legendary mouth-watering Air Itam assam laksa.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "1, Jalan Pasar, Pekan Ayer Itam, 11500 Ayer Itam, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "10:30am - 7pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Check out the hokkien mee (singapore's prawn mee equivalent) nearby too!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/cjYQU6ytnbn",
    name: "Open Google Maps"
  }, {
    link: "two/2",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
