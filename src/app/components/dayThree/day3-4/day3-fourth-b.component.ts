import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day3-fourth-b',
  templateUrl: './day3-fourth-b.component.html',
  styleUrls: ['./day3-fourth-b.component.css']
})
export class Day3FourthBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Dark Mansion - 3D Glow In The Dark Museum",
    subtitle: "Estimated time: 1.5 hr",
    img: "./assets/darkmuseum.jpg",
    description: "Dark Mansion consists of creative trendy modern artworks that have incorporated science and technology into them which created the latest main attractions and a must-visit museum with friends and family.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "145, Lebuh Kimberley, George Town, 10100 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "10am - 6:30pm"
  }, {
    iconName: "star_border",
    label: "Entrance Fee",
    details: "Check out klook for discount tickets!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/mbff6ezbBHZgxgUEA",
    name: "Open Google Maps"
  }, {
    link: "three/5",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
