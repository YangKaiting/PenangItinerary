import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Day1FirstChoicesComponent } from './components/dayOne/day1-1/day1-first-choices.component';
import { Day1FirstBComponent } from './components/dayOne/day1-1/day1-first-b.component';
import { Day1FirstAComponent } from './components/dayOne/day1-1/day1-first-a.component';
import { Day1SecondTGVComponent } from './components/dayOne/day1-2/day1-second-tgv.component';
import { Day1ThirdCheckinComponent } from './components/dayOne/day1-3/day1-third-checkin.component';
import { Day1FourthChoicesComponent } from './components/dayOne/day1-4/day1-fourth-choices.component';
import { Day1FourthAComponent } from './components/dayOne/day1-4/day1-fourth-a.component';
import { Day1FourthBComponent } from './components/dayOne/day1-4/day1-fourth-b.component';
import { Day1FifthChoicesComponent } from './components/dayOne/day1-5/day1-fifth-choices.component';
import { Day1FifthAComponent } from './components/dayOne/day1-5/day1-fifth-a.component';
import { Day1FifthBComponent } from './components/dayOne/day1-5/day1-fifth-b.component';
import { LastComponent } from './components/dayOne/day1-6/last.component';
import { Day2FirstChoicesComponent } from './components/dayTwo/day2-1/day2-first-choices.component';
import { Day2FirstAComponent } from './components/dayTwo/day2-1/choiceA/day2-first-a.component';
import { Day2FirstA1Component } from './components/dayTwo/day2-1/choiceA/day2-first-a1.component';
import { Day2FirstA2Component } from './components/dayTwo/day2-1/choiceA/day2-first-a2.component';
import { Day2FirstBComponent } from './components/dayTwo/day2-1/choiceB/day2-first-b.component';
import { Day2FirstB1Component } from './components/dayTwo/day2-1/choiceB/day2-first-b1.component';
import { Day2FirstB2Component } from './components/dayTwo/day2-1/choiceB/day2-first-b2.component';
import { Day2SecondChoicesComponent } from './components/dayTwo/day2-2/day2-second-choices.component';
import { Day2SecondAComponent } from './components/dayTwo/day2-2/day2-second-a.component';
import { Day2SecondBComponent } from './components/dayTwo/day2-2/day2-second-b.component';
import { Day2ThirdAComponent } from './components/dayTwo/day2-3/day2-third-a.component';
import { MapComponent } from './components/dayTwo/day2-3/map.component';
import { Day2ThirdLilIndiaComponent } from './components/dayTwo/day2-3/day2-third-lil-india.component';
import { Day2ThirdMercyComponent } from './components/dayTwo/day2-3/day2-third-mercy.component';
import { Day2ThirdAnglicanComponent } from './components/dayTwo/day2-3/day2-third-anglican.component';
import { Day2ThirdPeranakanComponent } from './components/dayTwo/day2-3/day2-third-peranakan.component';
import { Day2ThirdKapitanComponent } from './components/dayTwo/day2-3/day2-third-kapitan.component';
import { Day2ThirdChewComponent } from './components/dayTwo/day2-3/day2-third-chew.component';
import { Day2ThirdJubileeComponent } from './components/dayTwo/day2-3/day2-third-jubilee.component';
import { Day2ThirdCornwallisComponent } from './components/dayTwo/day2-3/day2-third-cornwallis.component';
import { Day2ThirdTownhallComponent } from './components/dayTwo/day2-3/day2-third-townhall.component';
import { Day2FourthChoicesComponent } from './components/dayTwo/day2-4/day2-fourth-choices.component';
import { Day2FourthAComponent } from './components/dayTwo/day2-4/day2-fourth-a.component';
import { Day2FourthBComponent } from './components/dayTwo/day2-4/day2-fourth-b.component';
import { Day2FifthComponent } from './components/dayTwo/day2-5/day2-fifth.component';
import { Day2SixthChoicesComponent } from './components/dayTwo/day2-6/day2-sixth-choices.component';
import { Day2SixthAComponent } from './components/dayTwo/day2-6/day2-sixth-a.component';
import { Day2SixthBComponent } from './components/dayTwo/day2-6/day2-sixth-b.component';
import { Day2SeventhComponent } from './components/dayTwo/day2-7/day2-seventh.component';
import { Day3FirstChoicesComponent } from './components/dayThree/day3-1/day3-first-choices.component';
import { Day3FirstAComponent } from './components/dayThree/day3-1/day3-first-a.component';
import { Day3FirstBComponent } from './components/dayThree/day3-1/day3-first-b.component';
import { Day3SecondComponent } from './components/dayThree/day3-2/day3-second.component';
import { Day3ThirdComponent } from './components/dayThree/day3-3/day3-third.component';
import { Day3FourthChoicesComponent } from './components/dayThree/day3-4/day3-fourth-choices.component';
import { Day3FourthAComponent } from './components/dayThree/day3-4/day3-fourth-a.component';
import { Day3FourthBComponent } from './components/dayThree/day3-4/day3-fourth-b.component';
import { Day3FifthChoicesComponent } from './components/dayThree/day3-5/day3-fifth-choices.component';
import { Day3FifthAComponent } from './components/dayThree/day3-5/day3-fifth-a.component';
import { Day3FifthBComponent } from './components/dayThree/day3-5/day3-fifth-b.component';
import { Day3SixthComponent } from './components/dayThree/day3-6/day3-sixth.component';


@NgModule({
  declarations: [
    AppComponent,
    Day1FirstChoicesComponent,
    Day1FirstBComponent,
    Day1FirstAComponent,
    Day1SecondTGVComponent,
    Day1ThirdCheckinComponent,
    Day1FourthChoicesComponent,
    Day1FourthAComponent,
    Day1FourthBComponent,
    Day1FifthChoicesComponent,
    Day1FifthAComponent,
    Day1FifthBComponent,
    LastComponent,
    Day2FirstChoicesComponent,
    Day2FirstAComponent,
    Day2FirstA1Component,
    Day2FirstA2Component,
    Day2FirstBComponent,
    Day2FirstB1Component,
    Day2FirstB2Component,
    Day2SecondChoicesComponent,
    Day2SecondAComponent,
    Day2SecondBComponent,
    Day2ThirdAComponent,
    MapComponent,
    Day2ThirdLilIndiaComponent,
    Day2ThirdMercyComponent,
    Day2ThirdAnglicanComponent,
    Day2ThirdPeranakanComponent,
    Day2ThirdKapitanComponent,
    Day2ThirdChewComponent,
    Day2ThirdJubileeComponent,
    Day2ThirdCornwallisComponent,
    Day2ThirdTownhallComponent,
    Day2FourthChoicesComponent,
    Day2FourthAComponent,
    Day2FourthBComponent,
    Day2FifthComponent,
    Day2SixthChoicesComponent,
    Day2SixthAComponent,
    Day2SixthBComponent,
    Day2SeventhComponent,
    Day3FirstChoicesComponent,
    Day3FirstAComponent,
    Day3FirstBComponent,
    Day3SecondComponent,
    Day3ThirdComponent,
    Day3FourthChoicesComponent,
    Day3FourthAComponent,
    Day3FourthBComponent,
    Day3FifthChoicesComponent,
    Day3FifthAComponent,
    Day3FifthBComponent,
    Day3SixthComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
