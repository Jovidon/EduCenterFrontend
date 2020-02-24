import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teacher-salary',
  templateUrl: './teacher-salary.page.html',
  styleUrls: ['./teacher-salary.page.scss'],
})
export class TeacherSalaryPage implements OnInit {
  salary: string;
  teacher = {
    name: 'BaerJon',
    surname: 'AbdullaTeddy',
    salary: 2000000,
    salaryType: 'Foiz',
    phone: '(99) 999-99-99',
    profPic: 'assets/img/speakers/bear.jpg'
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
    if (this.teacher.salaryType === 'Oylik') {
      this.salary = 'Oylik maoshi: ' + this.teacher.salary.toString() + ' UZS';
    } else if (this.teacher.salaryType === 'Foiz') {
      this.salary = 'Foiz maoshi: ' + this.teacher.salary.toString() + '%';
    }
  }

}
