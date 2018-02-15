import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "My movies";
  }

}