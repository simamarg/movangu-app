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
  buy: boolean;

  constructor(private appDataService: AppDataService, private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appDataService.getMovieById(params.id).subscribe(data => {
        this.movie = data;
      });
    });
    this.route.queryParams.subscribe(queryParams => {
      queryParams.buy === "true" ? this.buy = true : this.buy = false;
    });
  }

  handleClick() {
    if (this.buy) {
      this.userService.addMovie(this.movie);
    } else {
      this.userService.removeMovie(this.movie);
    }
    this.router.navigate(['/']);
  }
}
