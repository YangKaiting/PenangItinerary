import { Component, OnInit } from '@angular/core';
import { itinerary, content, navigation } from '../../model';

@Component({
  selector: 'app-day1-fourth-b',
  templateUrl: './day1-fourth-b.component.html',
  styleUrls: ['./day1-fourth-b.component.css']
})
export class Day1FourthBComponent implements OnInit {

  itinerary: itinerary = {
    iconName: "camera_alt",
    title: "Avatar Secret Garden",
    subtitle: "Estimated time: 1.5 hr",
    img: "./assets/penang-secret-garden-avatar.png",
    description: "Nestled in Tanjung Tokong, behind the Thai Pak Koong Temple is the Pandora inspired secret garden. The Penang Avatar Secret Garden was a project by MBI which turn this piece of greens into a neon fantasy. Neon LED lights are draped and wrapped at the branches and trunks of trees. Finding your way to the Penang Avatar Secret Garden might be a little tricky. At the traffic light further down Tesco Tanjung Tokong, turn right. Go all the way in and you’ll find the place. At 7:35 p.m., watch the garden turn into a magical land.",
  };

  bodyContent: content[] = [{
    iconName: "location_on",
    label: "Address",
    details: "336, Jalan Tokong Thai Pak Koong, Tanjung Tokong, 11200 Tanjung Bungah, Pulau Pinang, Malaysia"
  }, {
    iconName: "access_time",
    label: "Opening Hours",
    details: "8am - 12am"
  }, {
    iconName: "star_border",
    label: "Recommendations",
    details: "Free entry, go earlier for sunset at the beach"
  }];

  links: navigation[] = [{
    link: "https://goo.gl/maps/tZtbgbNR8V62",
    name: "Open Google Maps"
  }, {
    link: "one/5",
    name: "Next activity"
  }]

  constructor() { }

  ngOnInit() {
  }

}
