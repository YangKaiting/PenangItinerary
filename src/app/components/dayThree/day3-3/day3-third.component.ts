import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day3-third',
  templateUrl: './day3-third.component.html',
  styleUrls: ['./day3-third.component.css']
})
export class Day3ThirdComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Cheong Fatt Tze - The Blue Mansion",
    subtitle: "Estimated time: 45min",
    img: "./assets/bluemansion.jpg",
    description: "The Cheong Fatt Tze Mansion is a government gazetted heritage building located on Leith Street in George Town, Penang, Malaysia. The mansion's external decorations and indigo-blue outer walls make it a very distinctive building, and it is sometimes referred to as The Blue Mansion. A must see if you want to experience an important part of Penang’s colourful history and one of its most iconic pieces of architecture...",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "216, Jalan Macalister, 10400 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Tour Timing",
    details: "2pm, 3:30pm"
  }, {
    iconName: "star_border",
    label: "Entrance Fee",
    details: "Adult: RM18/pax"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "You may queue and buy tickets at the gate 15 mins prior to each tour but please be aware that the tour is popular and there are size limitation to each tour, thus it is not guaranteed that there will be space."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/YLsZUBZw1Ze7g4LM9",
    name: "Open Google Maps"
  }, {
    link: "three/4",
    name: "Next Activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
