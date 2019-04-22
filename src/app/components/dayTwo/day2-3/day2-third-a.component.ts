import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-a',
  templateUrl: './day2-third-a.component.html',
  styleUrls: ['./day2-third-a.component.css']
})
export class Day2ThirdAComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Leong San Tong Khoo Kongsi's Clan House and Museum",
    subtitle: "Estimated time: 1.5 - 2 hr",
    img: "./assets/khookongsi.jpg",
    description: "Leong San Tong Khoo Kongsi, or Khoo Kongsi for short, is one of the most distinctive Chinese clan association in Malaysia. It is well known worldwide for its extensive lineage that can be traced back 650 years ago, as well as its closely-knit and defensive congregation of buildings and a magnificent clanhouse.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "18 Cannon Square, 10200 Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "Daily, including Sunday and Public Holidays: 9am - 5pm"
  }, {
    iconName: "star_border",
    label: "Admission Fee",
    details: "Adults: RM 10/pax"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The Goddess of Mercy (aka Guan Yin) bronze statue is 36.5m." +
      "The base of the Kek Lok Si pagoda was built in a Chinese style, the center is Thai, and the top is Burmese. "
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/WiJgVs4BGc82",
    name: "Open Google Maps"
  }, {
    link: "https://www.khookongsi.com.my/the-tour/",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]


  constructor() { }

  ngOnInit() {
  }

}
