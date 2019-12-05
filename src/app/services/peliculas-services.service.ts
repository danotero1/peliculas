import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeliculasServicesService {
  urlPeliculas = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
  key = 'Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';
  constructor(private http: HttpClient) { }

  getPeliculas(pe: string){
    
   // tslint:disable-next-line:no-unused-expression
   
   const httpOptions = {
  
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'content-Type': 'application/json',
    })
  };
   let header = new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',

      // 'x-auth-token': localStorage.getItem("token")
    });
   
   let url = `${this.urlPeliculas}${pe}&&api-key=${this.key}`;
   return this.http.get(url);
  }

}
