import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day1-third-checkin',
  templateUrl: './day1-third-checkin.component.html',
  styleUrls: ['./day1-third-checkin.component.css']
})
export class Day1ThirdCheckinComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "home",
    title: "Tropicana Macalister",
    subtitle: "Estimated time: 1.5 hr. Next activity at 6:30pm",
    img: "../../../assets/airbnb",
    description: "After a long day, it's time to check in!",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "check with owner"
  }, {
    iconName: "access_time",
    label: "Check in",
    details: "5pm"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/Vg9s1forRw72",
    name: "Open Google Maps"
  }, {
    link: "one/4",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
