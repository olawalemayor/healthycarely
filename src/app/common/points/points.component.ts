import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
})
export class PointsComponent implements OnInit {
  constructor() {}

  @Input() point = '';

  imgUrl = '../../../assets/icons/check 1.png';

  ngOnInit(): void {}
}
