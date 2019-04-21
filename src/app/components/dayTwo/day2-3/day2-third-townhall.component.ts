import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-townhall',
  templateUrl: './day2-third-townhall.component.html',
  styleUrls: ['./day2-third-townhall.component.css']
})
export class Day2ThirdTownhallComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Penang Townhall",
    subtitle: "5min",
    img: "../../../assets/townhall.jpg",
    description: "The Town Hall is a British-built administrative building in George Town, Penang, Malaysia. It is located adjacent to the City Hall, which now serves as the seat of the Penang Island City Council.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Jalan Padang Kota Lama, Georgetown, 10200 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9am – 6:30pm"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The foundation stone of the Town Hall was laid in 1879 and the main building completed in 1883. It consisted of an assembly hall, a grand ballroom, and a library. You may be keen to note that the Penang Library was born here, after the Prince of Wales Library was moved here and renamed. An annex was added in 1890 while the porch and top floor added in 1903. The left wing - when cement plaster was introduced - as added in 1930. Those extensions and renovations together constitute the Town Hall."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/C5XxqPe5YT3G9UrB9",
    name: "Open Google Maps"
  }, {
    link: "https://www.penang-traveltips.com/town-hall.htm",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
