import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { UserService } from '../user.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  title: string;
  movies: Movie[];
  buy: boolean;
  buttonsDisplayed: {val: boolean};
  
  constructor(private appDataService: AppDataService, private userService: UserService) { }

  ngOnInit() {
    this.title = "All movies";
    this.appDataService.getMovies().subscribe(
      data => {
        this.movies = data;
      });
    this.buy = true;
    this.buttonsDisplayed = {val: true};
  }

  addMovie(movie: Movie) {
    this.userService.addMovie(movie);
  }
}