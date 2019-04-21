import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day3-fifth-b',
  templateUrl: './day3-fifth-b.component.html',
  styleUrls: ['./day3-fifth-b.component.css']
})
export class Day3FifthBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "restaurant",
    title: "Awesome Canteen",
    subtitle: "Leave by 6:00pm",
    img: "../../../assets/awesomecanteen.jpg",
    description: "Awesome Canteen is famed for their Paleo meal.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "164A-B, Lebuh Victoria Georgetown, 10300 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "11am - 11pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Try their Paleo series, especially Eggplant Niku Stack with Beef/Chicken, and Paleo Butterfish. Key lime pie and black tonic is definitely the most unique taste of desserts and coffee."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/U4Q7QocsKgnmcBnT8",
    name: "Open Google Maps"
  }, {
    link: "three/6",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
