import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-moview-card-grid',
  templateUrl: './moview-card-grid.component.html',
  styleUrls: ['./moview-card-grid.component.css'],
})
export class MoviewCardGridComponent implements OnInit {
  @Input() lstMovies!: any[];
  showGrid: boolean = false;

  constructor(private cinemaService: CinemaService, private router: Router) {}

  ngOnInit() {
    if (this.lstMovies != undefined && this.lstMovies.length > 0) {
      this.showGrid = true;
      console.log(this.lstMovies);
    }
  }

  fetchMovieDetail(MOV_Key: number) {
    this.router.navigate(['/movie', MOV_Key]).then(
      (nav) => {},
      (err) => {}
    );
  }
}
