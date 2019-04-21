import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../../../components/model';

@Component({
  selector: 'app-day2-first-a2',
  templateUrl: './day2-first-a2.component.html',
  styleUrls: ['./day2-first-a2.component.css']
})
export class Day2FirstA2Component implements OnInit {

  itinerary1: itinerary = {
    iconName: "restaurant",
    title: "Sister Curry Mee",
    subtitle: "Estimated time: 30 min",
    img: "../../../assets/sistercurrymee.jpg",
    description: "This is a 73-year-old business run by a pair of Penang sisters, selling heartwarming bowls of curry mee.",
  };

  bodyContent1: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "612 T, Jalan Air Itam, Pekan Ayer Itam, 11500 Ayer Itam, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "730am - 1pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Share a bowl!"
  }];

  links1: navigation[] = [{
    link: "https://goo.gl/maps/aWoAfytDmYv",
    name: "Open Google Maps"
  }, {
    link: "two/2",
    name: "Next activity"
  }]

  itinerary2: itinerary = {
    iconName: "restaurant",
    title: "Air Itam Laksa",
    subtitle: "Estimated time: 30 min",
    img: "../../../assets/airhitamlaksa.jpg",
    description: "Here you can find the legendary mouth-watering Air Itam assam laksa.",
  };

  bodyContent2: content[] = [{
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

  links2: navigation[] = [{
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
