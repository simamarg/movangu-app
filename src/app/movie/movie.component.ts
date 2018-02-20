import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() buttonText: {text: string};
  @Input() buttonsDisplayed: {val: string};
  @Output() onButtonClick: EventEmitter<Movie> = new EventEmitter();

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
  }

  handleClick() {
    this.onButtonClick.emit(this.movie);
  }

  getMovie() {
    return this.movie;
  }
}
