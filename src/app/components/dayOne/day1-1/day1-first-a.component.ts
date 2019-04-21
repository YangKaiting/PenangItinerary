import { Component, OnInit } from '@angular/core';
import { content, itinerary, navigation } from '../../model';

@Component({
  selector: 'app-day1-first-a',
  templateUrl: './day1-first-a.component.html',
  styleUrls: ['./day1-first-a.component.css']
})
export class Day1FirstAComponent implements OnInit {

  logoIcon: string = "restaurant"

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "China House",
    subtitle: "Estimated time: 1 hr. Leave by 1pm",
    img: "./assets/chinahouse.jpg",
    description: "ChinaHouse is a traditional compound of 3 heritage buildings, linked by an open air courtyard and converted into 14 spaces comprising shops, cafes, restaurant, galleries, live music and bakery.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "153, Beach St, Georgetown, 10300 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9am - 1am"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Tiramisu Cake (RM15/18), Assorted Cakes (RM12-18)"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/FJwK627ityG2",
    name: "Open Google Maps"
  }, {
    link: "one/2",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }
}

