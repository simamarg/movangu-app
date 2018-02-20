import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FilterPipe} from './filter.pipe';
import { AppDataService } from './app-data.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { MovieComponent } from './movie/movie.component';
import { NavComponent } from './nav/nav.component';
import { MovieExtendedComponent } from './movie-extended/movie-extended.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AllMoviesComponent,
    UserMoviesComponent,
    MovieComponent,
    NavComponent,
    MovieExtendedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppDataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
