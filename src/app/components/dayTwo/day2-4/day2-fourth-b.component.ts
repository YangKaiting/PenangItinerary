import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-fourth-b',
  templateUrl: './day2-fourth-b.component.html',
  styleUrls: ['./day2-fourth-b.component.css']
})
export class Day2FourthBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "888 Hokkien Mee",
    subtitle: "Estimated time: 1.5 hr",
    img: "./assets/888hokkien.jpg",
    description: "Not to be confused with the Hokkien Mee of Singapore, this is similar to Singapore's version of prawn noodle. The Penang Hokkien Mee is a spicy soup of mee (egg noodles) and bihun (rice noodles) in a stock made from prawn, dried shrimp, pork ribs or chicken stock.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "67-A, Lebuh Presgrave, George Town, 10300 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "4:30pm - 11:30pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Hokkien mee for sure!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/LiALRA8HE5VCugtC9",
    name: "Open Google Maps"
  }, {
    link: "two/5",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
