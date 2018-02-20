import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../app-data.service';
import { UserService } from '../user.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-extended',
  templateUrl: './movie-extended.component.html',
  styleUrls: ['./movie-extended.component.css']
})
export class MovieExtendedComponent implements OnInit {
  movie: Movie = new Movie();

  constructor(private appDataService: AppDataService, private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appDataService.getMovieById(params.id).subscribe(data => {
        this.movie = data;
      });
    });
  }

  handleClick() {
    this.userService.addMovie(this.movie);
    this.router.navigate(['/']);
  }
}
