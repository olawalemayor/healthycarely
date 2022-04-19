import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css'],
})
export class RatingCardComponent implements OnInit {
  constructor() {}

  @Input() votes = '';
  @Input() title = '';
  @Input() rating = '';

  ngOnInit(): void {}
}
