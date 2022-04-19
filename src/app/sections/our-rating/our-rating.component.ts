import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/model/model';
import { ContentServiceService } from '../../services/content-service.service';

@Component({
  selector: 'app-our-rating',
  templateUrl: './our-rating.component.html',
  styleUrls: ['./our-rating.component.css'],
})
export class OurRatingComponent implements OnInit {
  constructor(private cS: ContentServiceService) {}

  ratings: Rating[] = [];

  ngOnInit(): void {
    this.cS.getRatings().subscribe((ratings) => {
      this.ratings = ratings;
    });
  }
}
