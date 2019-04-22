import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-kapitan',
  templateUrl: './day2-third-kapitan.component.html',
  styleUrls: ['./day2-third-kapitan.component.css']
})
export class Day2ThirdKapitanComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Kapitan Keling Mosque",
    subtitle: "20min",
    img: "./assets/kapitan.jpg",
    description: "The Kapitan Keling Mosque is a mosque built in the 19th century by Indian Muslim traders in George Town, Penang, Malaysia. ",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "14, Jalan Buckingham, George Town, 10200 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "11.30am - 10pm"
  }, {
    iconName: "star_border",
    label: "Admission Fee",
    details: "Entrance to the grounds is Free. Free guided tours are operated by the Islamic Propagation Society. If you are interested on taking one, just head for the minaret at the front of the building, where there is an information office."
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The name \"kapitan keling\" is used to denote the headman or leader of the South Indian Muslim community. The term \"keling\" is derived from the ancient Hindu kingdom on the Coromandel coast of South India, and the local Hokkien community corrupts the word to derive \"keling - na\" for Indians in general, particularly those from South India (The North Indians are pooled together with another term, \"banggali\", though they are not necessarily from Bengal). The title \"Kapitan\" is a corruption of the English word \"Captain\", and is used to denote the leader of the community. Similarly, the leader of the Chinese community during that period is called a Kapitan China."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/WiJgVs4BGc82",
    name: "Open Google Maps"
  }, {
    link: "https://www.penang-traveltips.com/kapitan-keling-mosque.htm",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
