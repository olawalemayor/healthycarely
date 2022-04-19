import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css'],
})
export class CardProfileComponent implements OnInit {
  constructor() {}

  imageUrl = '../../../assets/image 1.png';

  ngOnInit(): void {}
}
