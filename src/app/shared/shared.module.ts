import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaService } from './services/cinema.service';
import { AuthService } from './services/auth.service';
import { APIService } from './services/app-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CinemaService, AuthService, APIService],
})
export class SharedModule {}
