import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Penang Trip';
  myDate = formatDate(new Date(), 'dd MMM yyyy', 'en');
}
