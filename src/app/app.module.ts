import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDataService } from './app-data.service';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    UserMoviesComponent,
    MovieListComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
