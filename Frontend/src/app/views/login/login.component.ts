import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user!: User;
  public newUser!: User;
  
  
  public username!: string;
  public password!: string;
  public email!: string;

  LoginForm = this.formBuilder.group({
    username: '',
    password: ''
  });



  constructor(private httpService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  sendLogin(){
    this.email = 'test';
    
    this.newUser = new User(this.LoginForm.get(['username'])?.value, this.LoginForm.get(['password'])?.value, this.email);
    console.log(localStorage.getItem('token'));

  }

}
