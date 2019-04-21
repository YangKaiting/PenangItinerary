import { Component, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;


  iconBase: string =
    'http://maps.google.com/mapfiles/kml/pal2/';

  icons = {
    holy: {
      icon: this.iconBase + 'icon11.png'
    },
    museum: {
      icon: this.iconBase + 'icon13.png'
    },
  };

  markers: object[] = [{
    lat: 5.41497,
    lng: 100.3366,
    content: "<a href=\"two/3a\"><b>Leong San Tong Khoo Kongsi</b></a>",
    type: 'museum'
  }, {
    lat: 5.41579,
    lng: 100.33833,
    content: "<a href=\"two/3li\"><b>Little India Heritage Villa</b></a>",
    type: 'museum'
  }, {
    lat: 5.41862,
    lng: 100.33854,
    content: "<a href=\"two/3me\"><b>Goddess Of Mercy Temple</b></a>",
    type: 'holy'
  }, {
    lat: 5.41987,
    lng: 100.33909,
    content: "<a href=\"two/3sga\"><b>St. George's Anglican Church</b></a>",
    type: 'holy'
  }, {
    lat: 5.41801,
    lng: 100.34093,
    content: "<a href=\"two/3ppm\"><b>Pinang Peranakan Mansion</b></a>",
    type: 'museum'
  }, {
    lat: 5.41696,
    lng: 100.33708,
    content: "<a href=\"two/3kkm\"><b>Kapitan Keling Mosque</b></a>",
    type: 'holy'
  }, {
    lat: 5.41291,
    lng: 100.33973,
    content: "<a href=\"two/3cj\"><b>Chew Jetty</b></a>",
    type: 'museum'
  }, {
    lat: 5.41939,
    lng: 100.34422,
    content: "<a href=\"two/3jct\"><b>Jubilee Clock Tower</b></a>",
    type: 'museum'
  }, {
    lat: 5.41996,
    lng: 100.34254,
    content: "<a href=\"two/3fc\"><b>Fort Cornwallis, Lebuh Light</b></a>",
    type: 'museum'
  }, {
    lat: 5.42115,
    lng: 100.34113,
    content: "<a href=\"two/3th\"><b>Penang Town Hall</b></a>",
    type: 'museum'
  }];


  constructor() { }

  addMarker(props) {
    var marker = new google.maps.Marker({
      position: { lat: props.lat, lng: props.lng },
      map: this.map,
      icon: this.icons[props.type].icon
    });
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    };
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener('click', function () {
        infoWindow.open(this.map, marker);
      })
    }
  }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(5.418169, 100.338465),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    for (let i = 0; i < this.markers.length; i++) {
      this.addMarker(this.markers[i])
    }
  }

}
