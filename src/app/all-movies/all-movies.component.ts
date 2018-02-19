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
  buttonText: string;
  buttonsDisplayed: {val: boolean};
  // start: number;
  // end: number;
  
  constructor(private appDataService: AppDataService, private userService: UserService) { }

  ngOnInit() {
    this.title = "All movies";
    this.appDataService.getMovies().subscribe(
      data => {
        this.movies = data;
      });
    this.buttonText = "Buy";
    this.buttonsDisplayed = {val: true};
    // this.start = 0;
    // this.end = 3;
  }

  addMovie(movie: Movie) {
    this.userService.addMovie(movie);
  }

  // changeView(num: number) {
  //   if (num === 1 && this.end <= this.movies.length -1) {
  //     this.start++;
  //     this.end++;
  //   } else if (num === -1 && this.start > 0) {
  //     this.start--;
  //     this.end--;
  //   }
  // }
}