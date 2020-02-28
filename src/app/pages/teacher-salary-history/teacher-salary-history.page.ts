import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'teacher-salary-history',
  templateUrl: './teacher-salary-history.page.html',
  styleUrls: ['./teacher-salary-history.page.scss'],
})
export class TeacherSalaryHistoryPage implements OnInit {
  id = 12345;
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

  avansHistory = [
    {
      date: new Date(),
      avans: 200000,
      qoldiq: 1500000,
    },
    {
      date: new Date(),
      avans: 500000,
      qoldiq: 1000000,
    },
    {
      date: new Date(),
      avans: 800000,
      qoldiq: 200000,
    },
    {
      date: new Date(),
      avans: 200000,
      qoldiq: 0,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
