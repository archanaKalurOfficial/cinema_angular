import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchText: string = '';
  @Output() onSearch = new EventEmitter<any>();

  constructor(private cinemaService: CinemaService, private router: Router) {}
  ngOnInit(): void {}

  fetchSearchedData() {
    if (this.searchText == '') return;

    this.cinemaService.fetchSearchedMovies(this.searchText).subscribe({
      next: (res) => {
        this.onSearch.emit(res.data);
      },
      error: (err) => {
        this.onSearch.emit();
      },
    });
  }

  redirectToFav_Movie() {
    this.router.navigate(['/fav-movie']).then(
      (nav) => {},
      (err) => {}
    );
  }
}
