import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonCmponentModule } from 'src/app/component/common/common-cmponent.module';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    SharedModule,
    CommonCmponentModule,
  ],
})
export class MovieDetailModule {}
