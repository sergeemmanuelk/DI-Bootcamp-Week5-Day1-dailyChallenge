import { Component, OnInit } from '@angular/core';
import { Films } from '../models/films';
import { FilmsService } from '../services/films.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  film: Films = new Films();

  constructor(private _filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this._filmsService.getFilms().pipe(map((dataAPi: any) => {
      console.log('dataAPi ', dataAPi);

      this.film.title = dataAPi.title;
      this.film.episode_id = dataAPi.episode_id;
      this.film.opening_crawl = dataAPi.opening_crawl;
      this.film.director = dataAPi.director;
      this.film.producer = dataAPi.producer;
      this.film.release_date = dataAPi.release_date;
      this.film.characters = dataAPi.characters;
      this.film.planets = dataAPi.planets;
      this.film.starships = dataAPi.starships;
      this.film.vehicles = dataAPi.vehicles;
      this.film.species = dataAPi.species;
      this.film.created = dataAPi.created;
      this.film.edited = dataAPi.edited;
      this.film.url = dataAPi.url;

    })).subscribe({
      /*next(response) {
        console.log(response);
      },*/
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("Terminé");
      }
    });

  }
}
