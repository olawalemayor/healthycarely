import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/model/model';
import { ContentServiceService } from '../../services/content-service.service';

@Component({
  selector: 'app-available-doctors',
  templateUrl: './available-doctors.component.html',
  styleUrls: ['./available-doctors.component.css'],
})
export class AvailableDoctorsComponent implements OnInit {
  availableDoctors: Doctors[] = [];

  constructor(private cS: ContentServiceService) {}

  ngOnInit(): void {
    this.cS.getAvailableDoctors().subscribe((doctors) => {
      this.availableDoctors = doctors;
    });
  }
}
