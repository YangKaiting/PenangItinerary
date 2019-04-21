import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day2-third-mercy',
  templateUrl: './day2-third-mercy.component.html',
  styleUrls: ['./day2-third-mercy.component.css']
})
export class Day2ThirdMercyComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Goddess of Mercy Temple",
    subtitle: "15min",
    img: "../../../assets/mercy.jpg",
    description: "The Goddess of Mercy Temple is a Chinese temple in the city of George Town in Penang, Malaysia. Situated at Pitt Street, it was first built in 1728, making it Penang's oldest Taoist temple. The temple is dedicated to the Taoist Goddess of Mercy, Guan Yin.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "30, Jalan Masjid Kapitan Keling, George Town, 10200 George Town, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "5am – 6pm"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "As the temple is usually packed with devotees, chances are you won't have time (or space) to stop and soak in the majestic architecture of the place. But locals will tell you that the place is relatively quieter in the late afternoons."
  }, {
    iconName: "local_library",
    label: "Fun Facts",
    details: "If you study the history of the Goddess of Mercy Temple, you would be surprised to learn that at the time it was built, it was not dedicated to Kuan Yin, the Goddess of Mercy, but rather to 妈祖婆"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/DCEdg96oKFHH88GD9",
    name: "Open Google Maps"
  }, {
    link: "https://www.star2.com/travel/2018/11/12/travel-what-to-do-at-the-goddess-of-mercy-temple-penang/",
    name: "More Info"
  }, {
    link: "two/map",
    name: "Back to map"
  }]

  constructor() { }

  ngOnInit() {
  }

}
