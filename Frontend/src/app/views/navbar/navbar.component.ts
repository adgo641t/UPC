import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;
  
  constructor() { }

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
