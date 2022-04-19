import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.css'],
})
export class FindDoctorComponent implements OnInit {
  constructor() {}

  imageUrl = '../../../assets/female-doctor_fococlipping_removed 2.png';

  ngOnInit(): void {}
}
