import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  endPoint = "https://swapi.dev/api/films/3/";

  constructor(private _http: HttpClient) { }

  getFilms() {
    return this._http.get(this.endPoint);
  }

}
