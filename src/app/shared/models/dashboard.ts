import { Movie } from './cinema';

export class Dashboard {
  constructor() {
    this.recentlyAddedMovies = [];
    this.recentWatchedMovies = [];
    this.favMovies = [];
    this.featuredMovies = [];
  }

  recentlyAddedMovies: Movie[];
  recentWatchedMovies: Movie[];
  favMovies: Movie[];
  featuredMovies: Movie[];
}
