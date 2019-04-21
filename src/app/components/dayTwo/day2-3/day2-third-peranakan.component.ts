import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-peranakan',
  templateUrl: './day2-third-peranakan.component.html',
  styleUrls: ['./day2-third-peranakan.component.css']
})
export class Day2ThirdPeranakanComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Pinang Peranakan Mansion",
    subtitle: "30min",
    img: "../../../assets/peranakanmansion.jpg",
    description: "The Pinang Peranakan Mansion in George Town, Penang, Malaysia, is a museum dedicated to Penang's Peranakan heritage. The museum itself is housed within a distinctive green-hued mansion at Church Street, George Town, which once served as the residence and office of a 19th century Chinese tycoon, Chung Keng Quee.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "29, Church St, Georgetown, 10200 George Town, Penang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "9:30am – 5pm"
  }, {
    iconName: "star_border",
    label: "Admission Fee",
    details: "Adults: RM 20/pax"
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "Due to its unique architecture and interior design that reflect the lifestyles of the Peranakans in Penang, the mansion has been featured in television series and reality TV shows, such as The Little Nyonya, The Amazing Race and The Amazing Race Asia."
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/Sfq2xBjtDL92EdMm7",
    name: "Open Google Maps"
  }, {
    link: "https://en.wikipedia.org/wiki/Pinang_Peranakan_Mansion",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
