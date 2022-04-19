import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  imageUrl = '../../../assets/female doctor_fococlipping_removed 1.png';

  ngOnInit(): void {}
}
