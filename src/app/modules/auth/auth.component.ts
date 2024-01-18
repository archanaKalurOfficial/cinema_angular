import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isShowRegisterPage: boolean = false;

  constructor() {}

  ngOnInit() {}

  lblRegister_click() {
    this.isShowRegisterPage = true;
  }
  lbllogin_click() {
    this.isShowRegisterPage = false;
  }
}
