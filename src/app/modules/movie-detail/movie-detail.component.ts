import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Movie, UserFavMovies } from 'src/app/shared/models/cinema';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  objMovie!: Movie;
  showData: boolean = false;
  intMOV_Key: any;
  lstPreferedList: Movie[] = [];
  showGrid: boolean = false;
  constructor(
    private cinemaService: CinemaService,
    private router: Router,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.intMOV_Key = this._Activatedroute.snapshot.paramMap.get('id');
    this.fetchMovieDetail(this.intMOV_Key);
    this.fetchUserPefrences();
  }

  fetchMovieDetail(MOV_Key: any) {
    this.cinemaService.fetchMovieDetail(MOV_Key).subscribe({
      next: (res) => {
        this.objMovie = res.data;
        if (this.objMovie) {
          this.showData = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  manageFavMovie() {
    let objUserFavMovies = new UserFavMovies();
    objUserFavMovies.UFM_ActiveStatus = 1;
    objUserFavMovies.UFM_Key = 1;
    objUserFavMovies.UFM_UserKey = 1;
    objUserFavMovies.UFM_CreatedOn = objUserFavMovies.UFM_ModifiedOn =
      new Date();
    objUserFavMovies.UFM_moV_Key = this.objMovie.moV_Key;

    this.cinemaService.manageFavMovie(objUserFavMovies).subscribe({
      next: (res) => {
        console.log(res);
        this.objMovie = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  fetchUserPefrences() {
    this.cinemaService.fetchUserPreferences(1).subscribe({
      next: (res) => {
        console.log();
        this.lstPreferedList = res.data;
        if (
          this.lstPreferedList != undefined &&
          this.lstPreferedList != null &&
          this.lstPreferedList.length > 0
        )
          this.showGrid = true;
      },
      error: (res) => {},
    });
  }
}
