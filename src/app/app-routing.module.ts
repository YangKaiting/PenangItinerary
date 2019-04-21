import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { Day2FirstBComponent } from './components/dayTwo/day2-1/choiceB/day2-first-b.component';
import { Day2FirstA1Component } from './components/dayTwo/day2-1/choiceA/day2-first-a1.component';
import { Day2FirstA2Component } from './components/dayTwo/day2-1/choiceA/day2-first-a2.component';
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
import { Day2FifthComponent } from './components/dayTwo/day2-5/day2-fifth.component';
import { Day2FourthBComponent } from './components/dayTwo/day2-4/day2-fourth-b.component';
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

const routes: Routes = [
  { path: "", component: Day1FirstChoicesComponent },
  { path: "one/1a", component: Day1FirstAComponent },
  { path: "one/1b", component: Day1FirstBComponent },
  { path: "one/2", component: Day1SecondTGVComponent },
  { path: "one/3", component: Day1ThirdCheckinComponent },
  { path: "one/4", component: Day1FourthChoicesComponent },
  { path: "one/4a", component: Day1FourthAComponent },
  { path: "one/4b", component: Day1FourthBComponent },
  { path: "one/5", component: Day1FifthChoicesComponent },
  { path: "one/5a", component: Day1FifthAComponent },
  { path: "one/5b", component: Day1FifthBComponent },
  { path: "one/6", component: LastComponent },
  { path: "two/1", component: Day2FirstChoicesComponent },
  { path: "two/1a", component: Day2FirstAComponent },
  { path: "two/1a1", component: Day2FirstA1Component },
  { path: "two/1a2", component: Day2FirstA2Component },
  { path: "two/1b", component: Day2FirstBComponent },
  { path: "two/1b1", component: Day2FirstB1Component },
  { path: "two/1b2", component: Day2FirstB2Component },
  { path: "two/2", component: Day2SecondChoicesComponent },
  { path: "two/2a", component: Day2SecondAComponent },
  { path: "two/2b", component: Day2SecondBComponent },
  { path: "two/map", component: MapComponent },
  { path: "two/3a", component: Day2ThirdAComponent },
  { path: "two/3li", component: Day2ThirdLilIndiaComponent },
  { path: "two/3me", component: Day2ThirdMercyComponent },
  { path: "two/3sga", component: Day2ThirdAnglicanComponent },
  { path: "two/3ppm", component: Day2ThirdPeranakanComponent },
  { path: "two/3kkm", component: Day2ThirdKapitanComponent },
  { path: "two/3cj", component: Day2ThirdChewComponent },
  { path: "two/3jct", component: Day2ThirdJubileeComponent },
  { path: "two/3fc", component: Day2ThirdCornwallisComponent },
  { path: "two/3th", component: Day2ThirdTownhallComponent },
  { path: "two/4", component: Day2FourthChoicesComponent },
  { path: "two/4a", component: Day2FourthAComponent },
  { path: "two/4b", component: Day2FourthBComponent },
  { path: "two/5", component: Day2FifthComponent },
  { path: "two/6", component: Day2SixthChoicesComponent },
  { path: "two/6a", component: Day2SixthAComponent },
  { path: "two/6b", component: Day2SixthBComponent },
  { path: "two/7", component: Day2SeventhComponent },
  { path: "three/1", component: Day3FirstChoicesComponent },
  { path: "three/1a", component: Day3FirstAComponent },
  { path: "three/1b", component: Day3FirstBComponent },
  { path: "three/2", component: Day3SecondComponent },
  { path: "three/3", component: Day3ThirdComponent },
  { path: "three/4", component: Day3FourthChoicesComponent },
  { path: "three/4a", component: Day3FourthAComponent },
  { path: "three/4b", component: Day3FourthBComponent },
  { path: "three/5", component: Day3FifthChoicesComponent },
  { path: "three/5a", component: Day3FifthAComponent },
  { path: "three/5b", component: Day3FifthBComponent },
  { path: "three/6", component: Day3SixthComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
