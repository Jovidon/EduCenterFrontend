import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-student',
  templateUrl: './about-student.page.html',
  styleUrls: ['./about-student.page.scss'],
})
export class AboutStudentPage implements OnInit {
  student = {
    name: 'BaerJon',
    surname: 'AbdullaTeddy',
    phone: '(99) 999-99-99',
    profPic: 'assets/img/speakers/bear.jpg',
  };

  groups = [
    {
      number: 1,
      condition: 'Aktive',
      subject: 'Matemetika',
      eduStyle: 'Oylik',
    },
    {
      number: 3,
      condition: 'Inactive',
      subject: 'Fizika',
      eduStyle: 'Oylik',
    },
    {
      number: 12,
      condition: 'Aktive',
      subject: 'Matemetika',
      eduStyle: 'Oylik',
    },
    {
      number: 21,
      condition: 'Aktive',
      subject: 'Fizika',
      eduStyle: 'Oylik',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
