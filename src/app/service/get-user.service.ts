import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http:HttpClient) { }

  getUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get('http://localhost:3000/user', {headers})

  }
}
