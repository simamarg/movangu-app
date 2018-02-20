import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent implements OnInit {
  movies: Movie[];
  title: string;
  buy: boolean;
  buttonsDisplayed: {val: boolean};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.title = "My movies";
    this.movies = this.userService.getUserMovies();
    this.buy = false;
    this.buttonsDisplayed = {val: false};
  }

  removeMovie(movie: Movie) {
    this.userService.removeMovie(movie);
  }

  toggleButtons() {
    this.buttonsDisplayed.val = !this.buttonsDisplayed.val;
  }
}
