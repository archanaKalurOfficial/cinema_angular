import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/cinema';
import { Dashboard } from 'src/app/shared/models/dashboard';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  objDashboard = new Dashboard();
  lstFeaturedMovies: Movie[] = [];
  lstRecentlyAddedMovies: Movie[] = [];
  showData: boolean = false;
  showSearchResult: boolean = false;
  searchedMovies: Movie[] = [];
  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.fetchDashboardDetails();
  }

  fetchDashboardDetails() {
    this.cinemaService.fetchDashboardData(1).subscribe({
      next: (res) => {
        this.objDashboard = res.data;
        if (this.objDashboard != null) this.showData = true;
        this.lstFeaturedMovies = res.data.featuredMovies;
        this.lstRecentlyAddedMovies = res.data.recentlyAddedMovies;
        console.log(this.objDashboard);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  fetchSearchedData(event: any) {
    this.showSearchResult = true;
    this.searchedMovies = event;
    this.showData = false;
    if (
      this.searchedMovies != undefined &&
      this.searchedMovies != null &&
      this.searchedMovies.length > 0
    )
      this.showData = true;
  }
}
