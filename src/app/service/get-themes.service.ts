import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetThemesService {

  constructor(private http:HttpClient) { }

  getThemes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

   return this.http.get('http://localhost:3000/themes', {headers})

   }
  }

