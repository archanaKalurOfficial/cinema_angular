import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIService } from './app-service.service';
import { Movie, UserFavMovies } from '../models/cinema';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  readonly apiUrl = 'https://localhost:7110/api/';
  selectedMovie?: Movie;

  constructor(private apiService: APIService) {}

  setMovieObject(objMovie: Movie) {
    this.selectedMovie = new Movie();
    this.selectedMovie = objMovie;
  }

  fetchDashboardData(User_Id: number) {
    return this.apiService
      .get(`/cinema/fetchDashboardData?intUser_Id=` + User_Id)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  fetchMovieDetail(MOV_Key: number) {
    return this.apiService
      .get(`/cinema/fetchMovieDetail?intMOV_Key=` + MOV_Key)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  manageFavMovie(model: UserFavMovies) {
    return this.apiService.post(`/cinema/manageFavMovie`, model).pipe(
      map((data) => {
        return data;
      })
    );
  }

  fetchUserPreferences(User_Id: number) {
    return this.apiService
      .get(`/cinema/fetchUserPreferences?id=` + User_Id)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  fetchFavMovieList(User_Id: number) {
    return this.apiService
      .get(`/cinema/fetchFavMovieList?intUser_Id=` + User_Id)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  fetchSearchedMovies(searchedText: string) {
    return this.apiService
      .get(`/cinema/fetchSearchedMovieList?strMOV_Name=` + searchedText)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
