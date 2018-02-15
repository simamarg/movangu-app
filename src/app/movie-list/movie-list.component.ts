import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.movies = this.appDataService.getMovies();
  }
}
