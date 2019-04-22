import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-jubilee',
  templateUrl: './day2-third-jubilee.component.html',
  styleUrls: ['./day2-third-jubilee.component.css']
})
export class Day2ThirdJubileeComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Jubilee Clock Tower",
    subtitle: "5min",
    img: "./assets/jubileeclocktower.jpg",
    description: "The Jubilee Clock Tower, in George Town, Penang, Malaysia, is a Moorish-style Jubilee clocktower at the junction of Light Street and Beach Street. Built to commemorate Queen Victoria's 1897 Diamond Jubilee, the tower is sixty feet tall, one foot for each year of Victoria's reign. A corner of the wall surrounding Fort Cornwallis is situated behind the tower.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Lebuh Light, George Town, 10450 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "24 hours"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The clock tower is slightly tilted, a result of bombing during the Second World War."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/6FG28pk86sDpYzRWA",
    name: "Open Google Maps"
  }, {
    link: "https://penang.fandom.com/wiki/Jubilee_Clock_Tower",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
