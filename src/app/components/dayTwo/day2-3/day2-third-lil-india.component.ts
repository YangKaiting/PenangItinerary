import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-lil-india',
  templateUrl: './day2-third-lil-india.component.html',
  styleUrls: ['./day2-third-lil-india.component.css']
})
export class Day2ThirdLilIndiaComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Little India",
    subtitle: "15min",
    img: "../../../assets/lilindia.jpg",
    description: "Little India is an enclave within the inner quarters of George Town, Penang. As with other Little Indias elsewhere, the Little India of George Town is lined with shops managed by the Indian Community. It's a place to enjoy a kaleidoscope of colours and sounds, with goods from India spilling to the sidewalks, the smell of various spices in the air and Indian music blaring from loud speakers.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "Lebuh Pasar, George Town, 10450 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "8am – 9:45pm"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "The oldest Hindu temple in Penang, Sri Mahamariamman Temple is located here."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/PdpzXuKui6Y36aQYA",
    name: "Open Google Maps"
  }, {
    link: "https://en.wikipedia.org/wiki/Little_India,_Penang",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
