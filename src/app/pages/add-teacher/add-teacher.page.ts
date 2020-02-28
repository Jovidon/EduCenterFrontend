import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../interfaces/teacher';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { NgForm } from '@angular/forms';
import { RestService } from '../../providers/api';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {
  sType: string;
  inputOn = false;
  user: Teacher = {
    fullName : '',
    address : '',
    image : '',
    info : '',
    login : '',
    pasword : '',
    gender : 0,
    phone : '',
    salaryType: '',
    salary: null,
  };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private apiProvider :RestService, 
    private storage: Storage
  ) {}

  onInput() {
    this.sType = '';
    if (this.user.salaryType === 'Foiz') {
      this.sType = '%';
      this.inputOn = true;
    } else if (this.user.salaryType === 'Oylik') {
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

  addTesher(){
    this.apiProvider.post('adduser', this.user).subscribe(res => {
      
    });
  }


}
