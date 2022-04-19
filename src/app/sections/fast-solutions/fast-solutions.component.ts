import { Component, OnInit } from '@angular/core';
import { FSContent } from 'src/app/model/model';
import { ContentServiceService } from '../../services/content-service.service';

@Component({
  selector: 'app-fast-solutions',
  templateUrl: './fast-solutions.component.html',
  styleUrls: ['./fast-solutions.component.css'],
})
export class FastSolutionsComponent implements OnInit {
  constructor(private cS: ContentServiceService) {}

  fSContents: FSContent[] = [];
  ngOnInit(): void {
    this.cS.getFSConctent().subscribe((content) => {
      this.fSContents = content;
    });
  }
}
