import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { GetDataService } from 'src/app/service/get-data.service';

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

  LoginForm = this.formBuilder.group({
    username: '',
    password: ''
  });



  constructor(private httpService: GetDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  sendLogin(){
    
    this.newUser = new User(this.LoginForm.get(['username'])?.value, this.LoginForm.get(['password'])?.value);

    this.httpService.sendLogin(this.newUser).subscribe(res => {console.log(res)});

  }

}
