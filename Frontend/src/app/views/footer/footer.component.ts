import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public data?: string;

  constructor(public router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.data = this.router.url;
      }
    });
   }

  ngOnInit(): void {
  }

}
