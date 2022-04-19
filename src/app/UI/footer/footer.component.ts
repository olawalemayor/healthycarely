import { Component, OnInit } from '@angular/core';
import { FooterLink } from '../../model/model';
import { ContentServiceService } from '../../services/content-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private cS: ContentServiceService) {}

  footerLinks: FooterLink[] = [];

  ngOnInit(): void {
    this.cS.getFooterLinks().subscribe((links) => {
      this.footerLinks = links;
    });
  }
}
