import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'teacher-salary',
  templateUrl: './teacher-salary.page.html',
  styleUrls: ['./teacher-salary.page.scss'],
})
export class TeacherSalaryPage implements OnInit {
  salary: string;
  teacher: Teacher = {
    fullName: 'BaerJon',
    address: 'AbdullaTeddy',
    salary: 2000000,
    salaryType: 'Foiz',
    phone: '(99) 999-99-99',
    image: 'assets/img/speakers/bear.jpg',
    EduCenter_id: 1,
    isActive: 1,
    Roles_id: 3,
    info : '',
    login : '',
    pasword : '',
    gender : 1,
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
