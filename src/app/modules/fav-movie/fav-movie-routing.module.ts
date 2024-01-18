import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavMovieComponent } from './fav-movie.component';

const routes: Routes = [{ path: '', component: FavMovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavMovieRoutingModule { }
