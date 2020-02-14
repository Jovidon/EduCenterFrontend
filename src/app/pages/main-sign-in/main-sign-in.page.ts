import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-sign-in',
  templateUrl: './main-sign-in.page.html',
  styleUrls: ['./main-sign-in.page.scss'],
})
export class MainSignInPage implements OnInit {
  signup = {
    username: '',
    password: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
