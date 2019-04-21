import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day1-second-tgv',
  templateUrl: './day1-second-tgv.component.html',
  styleUrls: ['./day1-second-tgv.component.css']
})
export class Day1SecondTGVComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "help_outline",
    title: "TGV",
    subtitle: "Estimated time: 3.5 hr. Leave by 5pm",
    img: "./assets/giphy-qm.gif",
    description: "Hint: Its the final game!",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "182, Jalan Magazine, 10300 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "star_border",
    label: "Tips",
    details: "Don't be late!"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/FJwK627ityG2",  // to change!
    name: "Open Google Maps"
  }, {
    link: "one/3",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
