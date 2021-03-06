import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(public http: HttpClient) { }

  getPays(motCle: String, page: number, size: number) {
    return this.http.get(`http://localhost:8080/SpringWeb/country1?motCle=${motCle}&page=${page}&size=${size}`).pipe(
     map(resp => resp));

  }
}
