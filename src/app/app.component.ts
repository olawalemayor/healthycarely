import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  isDesktop = true;

  onResize(event: any) {
    this.isDesktop = event.target.innerWidth < 1440 ? false : true;
  }

  ngAfterViewInit(): void {
    const reveal = () => {
      const reveals = document.querySelectorAll(
        '.reveal'
      ) as NodeListOf<HTMLDivElement>;

      reveals.forEach((reveal) => {
        console.log(window.innerHeight);
        if (reveal.getBoundingClientRect().top < window.innerHeight - 150)
          reveal.classList.add('active');
        else reveal.classList.remove('active');
      });
    };

    window.addEventListener('scroll', reveal);
  }
}
