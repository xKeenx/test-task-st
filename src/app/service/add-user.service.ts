import { Injectable } from '@angular/core';
import {IUser} from "../models/user";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http:HttpClient) { }

  addUser(user:IUser){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/',
      user)
  }



}
