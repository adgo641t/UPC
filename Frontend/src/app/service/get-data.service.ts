import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }


  sendLogin(User: User) {
    console.log(User);
    return this.http.post('http://localhost:3001/login',User);
  }
}
