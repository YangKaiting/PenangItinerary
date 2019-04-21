import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-fifth',
  templateUrl: './day2-fifth.component.html',
  styleUrls: ['./day2-fifth.component.css']
})
export class Day2FifthComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "home",
    title: "Tropicana Macalister",
    subtitle: "Estimated time: 2 hrs",
    img: "../../../assets/airbnb",
    description: "Let's go back to rest and freshen up for more nightlife later!",
  };

  links: navigation[] = [{
    link: "https://goo.gl/maps/Vg9s1forRw72",
    name: "Open Google Maps"
  }, {
    link: "two/6",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
