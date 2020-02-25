import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../interfaces/teacher';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {
  sType: string;
  inputOn = false;
  teacher: Teacher = {
     name: '',
     surname: '',
     phone: '',
     subjects: '',
     salaryType: '',
     salary: null,
     profPic: ''
  };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) {}

  onInput() {
    this.sType = '';
    if (this.teacher.salaryType === 'Foiz') {
      this.sType = '%';
      this.inputOn = true;
    } else if (this.teacher.salaryType === 'Oylik') {
      this.sType = ' UZS';
      this.inputOn = true;
    } else {
      this.inputOn = false;
    }
    console.log(this.sType);
  }

  cancel() {
  }

  onTeacher(form: NgForm) {
  }

  ngOnInit() {
  }

}
