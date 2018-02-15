import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  title: string;
  
  constructor() { }

  ngOnInit() {
    this.title = "All movies";
  }

}