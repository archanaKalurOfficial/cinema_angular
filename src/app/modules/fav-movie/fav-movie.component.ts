import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/cinema';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css'],
})
export class FavMovieComponent implements OnInit {
  lstFavMovies: Movie[] = [];
  showData: boolean = false;

  constructor(private router: Router, private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.fetchFavMovieList();
  }

  fetchMovieDetail(MOV_Key: number) {
    this.router.navigate(['/movie', MOV_Key]).then(
      (nav) => {},
      (err) => {}
    );
  }

  fetchFavMovieList() {
    this.cinemaService.fetchFavMovieList(1).subscribe({
      next: (res) => {
        console.log(res);
        this.lstFavMovies = res.data;
        if (
          this.lstFavMovies != undefined &&
          this.lstFavMovies != null &&
          this.lstFavMovies.length > 0
        )
          this.showData = true;
      },
      error: (err) => {},
    });
  }
}
