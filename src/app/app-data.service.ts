import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from './models/movie';
import { User } from './models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {
  movies: Movie[];

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
  }
}