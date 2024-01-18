import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavMovieRoutingModule } from './fav-movie-routing.module';
import { FavMovieComponent } from './fav-movie.component';
import { CommonCmponentModule } from 'src/app/component/common/common-cmponent.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FavMovieComponent],
  imports: [
    CommonModule,
    FavMovieRoutingModule,
    SharedModule,
    CommonCmponentModule,
  ],
})
export class FavMovieModule {}
