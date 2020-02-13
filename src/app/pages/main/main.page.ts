import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  signup = {
    name: '',
    sname: '',
    email: '',
    login: '',
    password: '',
    rpassword: '',
    centerName: '',
    phone: '',
    terms: false
  };
  constructor() { }

  ngOnInit() {
  }

}
