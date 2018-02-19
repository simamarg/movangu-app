import { Injectable } from '@angular/core';

import { Movie } from './models/movie';
import { User } from './models/user';

@Injectable()
export class UserService {
  userMovies: Movie[] = new Array<Movie>();
  user: User = {budget: 30, name: "Fake User"};

  constructor() { }

  getUserMovies(): Movie[] {
    return this.userMovies;
  }

  getUser() {
    return this.user;
  }

  addMovie(movie: Movie) {
    let movieIndex = this._findMovieIndexById(movie, this.userMovies);
    if (movieIndex === -1 && this.user.budget - movie.price >= 0) {
      this.userMovies.push(movie);
      this.user.budget -= movie.price;
    } else if (movieIndex >= 0) {
      alert("This movie is already yours :)");
    } else if (this.user.budget - movie.price < 0) {
      alert(`Sorry, this movie costs $${movie.price}, but you only have $${this.user.budget} left.`);
    }
  }

  _findMovieIndexById(movie: Movie, moviesArray: Movie[]) {
    return moviesArray.findIndex(element => element._id === movie._id);
  }

  removeMovie(movie: Movie){
    let i = this._findMovieIndexById(movie, this.userMovies);
    this.userMovies.splice(i, 1);
    this.user.budget += movie.price; // user is refunded for the movie
  }
}
