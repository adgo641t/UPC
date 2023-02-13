import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user!: User;
  
  public username!: string;
  public password!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
