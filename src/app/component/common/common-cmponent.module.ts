import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviewCardGridComponent } from './moview-card-grid/moview-card-grid.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, MoviewCardGridComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [NavbarComponent, MoviewCardGridComponent],
})
export class CommonCmponentModule {}
