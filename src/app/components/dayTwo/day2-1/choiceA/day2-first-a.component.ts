import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../../../components/model';

@Component({
  selector: 'app-day2-first-a',
  templateUrl: './day2-first-a.component.html',
  styleUrls: ['./day2-first-a.component.css']
})
export class Day2FirstAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Sin Kim San Hawker Center",
    subtitle: "Estimated time: 30 min",
    img: "./assets/bananapancake.jpg",
    description: "",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "168, Jalan Macalister, 10400 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "8am - 1pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Definitely the banana pancake! The almost legendary banana pancakes with raisin and lots of toasted sesame seeds. One of a kind, no doubt."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/1ezdp7vwg986u7Vr5",
    name: "Open Google maps"
  }, {
    link: "http://www.vkeong.com/eat/chinese-pancake-apom-pisang-raisins-sim-kim-san-coffee-shop-rangoon-road/",
    name: "More Info"
  }, {
    link: "two/1a1",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}