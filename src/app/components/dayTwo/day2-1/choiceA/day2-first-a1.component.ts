import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../../../components/model';


@Component({
  selector: 'app-day2-first-a1',
  templateUrl: './day2-first-a1.component.html',
  styleUrls: ['./day2-first-a1.component.css']
})
export class Day2FirstA1Component implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Kek Lok Si Temple",
    subtitle: "Estimated time: 2 hr",
    img: "../../../assets/kekloksi.jpg",
    description: "Kek Lok Si also known as the Temple of Supreme Bliss. It is said to be the largest Buddhist temple in Southeast Asia, and arguably one of the most famous in Penang.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "1000-L, Tingkat Lembah Ria 1, 11500 Ayer Itam, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "7am - 5:30pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Admission is free, except for a small charge of MYR2* each for entry into the pagoda and the Sky Lift."
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The Goddess of Mercy (aka Guan Yin) bronze statue is 36.5m." +
      "The base of the Kek Lok Si pagoda was built in a Chinese style, the center is Thai, and the top is Burmese."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/WiJgVs4BGc82",
    name: "Open Google Maps"
  }, {
    link: "two/1a2",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
