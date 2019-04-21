import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day1-first-choices',
  templateUrl: './day1-first-choices.component.html',
  styleUrls: ['./day1-first-choices.component.css']
})
export class Day1FirstChoicesComponent implements OnInit {

  day1firstchoices: string[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.day1firstchoices = ["Lets go somewhere with great dessert and coffee and awesome ambience!", "Dive right in to local cuisine!"];
  }

}
