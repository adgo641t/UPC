import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  sendLogin(User: User) {
    return this.http.post('http://localhost:3001/login',User);
  }

  sendRegister(User: User){
    console.log("dentro el servicio");
    return this.http.post('http://localhost:3001/register',User);
  }
}
