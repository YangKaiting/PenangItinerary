import { Component, OnInit } from '@angular/core';
import { content, itinerary, navigation } from '../../model';

@Component({
  selector: 'app-day1-first-b',
  templateUrl: './day1-first-b.component.html',
  styleUrls: ['./day1-first-b.component.css']
})
export class Day1FirstBComponent implements OnInit {

  itinerary1: itinerary = {
    iconName: "restaurant",
    title: "Tiger Char Koay Teow",
    subtitle: "Estimated time: 1 hr. Leave by 1pm",
    img: "../../../assets/tigercharkoayteow.jpg",
    description: "Penang-style Char Koay Teow is the flavor of ‘wok hei’, and the freshness of the ingredients.",
  };

  bodyContent1: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "179 Lebuh Carnarvon Georgetown, 10450 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "8am - 2:30pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Go for the duck eggs option for a richer taste to each mouthful of noodles."
  }];

  links1: navigation[] = [{
    link: "https://goo.gl/maps/L9ZUR6QdD1K2",
    name: "Open Google Maps"
  }, {
    link: "one/2",
    name: "Next activity"
  }]

  itinerary2: itinerary = {
    iconName: "restaurant",
    title: "Pitt Street Koay Teow Th'ng",
    subtitle: "Estimated time: 1 hr. Leave by 1pm",
    img: "../../../assets/pittstreetkkt.jpg",
    description: "aka Eel Fish Ball Noodle. Visit this store for their EEL MEATBALLS! Don’t expect the bouncy texture of fishballs but more of the tender soft feeling.",
  };

  bodyContent2: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "183, Lebuh Carnarvon, George Town, 10100 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "8am - 2pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "RM 8 (KTT soup/dry), RM 5 (Fishball/Meatball Soup)"
  }];

  links2: navigation[] = [{
    link: "https://goo.gl/maps/cjQU6ytnbn",
    name: "Open Google Map"
  }, {
    link: "one/2",
    name: "Next activity"
  }]


  constructor() { }

  ngOnInit() {
  }

}
