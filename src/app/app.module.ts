import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  CardComponent,
  CardProfileComponent,
  AvailableDoctorsComponent,
  PointsComponent,
  RatingCardComponent,
} from './common';
import {
  HeroComponent,
  FindDoctorComponent,
  ScheduleComponent,
  FastSolutionsComponent,
  OurRatingComponent,
  FeedbackComponent,
} from './sections';
import { NavbarComponent, FooterComponent } from './UI';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    FindDoctorComponent,
    ScheduleComponent,
    CardComponent,
    CardProfileComponent,
    AvailableDoctorsComponent,
    FastSolutionsComponent,
    PointsComponent,
    OurRatingComponent,
    RatingCardComponent,
    FeedbackComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
