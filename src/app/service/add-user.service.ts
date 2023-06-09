import { Injectable } from '@angular/core';
import {IUser} from "../models/user";
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http:HttpClient) { }

  addUser(user:IUser) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

   return this.http.post('http://localhost:3000/users', user, {headers})

  }
}
