import { Injectable } from '@angular/core';
import {IUser} from "../models/user";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import {IMessage} from "../models/message";
import {Theme} from "../models/theme";

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {

  constructor(private http:HttpClient) { }

  addMessage(message:IMessage) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:3000/messages', message, {headers}).subscribe(res=>console.log(res))
  }
}
