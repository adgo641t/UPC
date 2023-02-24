import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public data?: string;

  public isLoggedIn = false;
  
  constructor(public router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.data = this.router.url;
      }
    });
   }

  ngOnInit(): void {
    if (localStorage.getItem('User_Token')) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('User_Token');
    this.isLoggedIn = false;
  }

}
