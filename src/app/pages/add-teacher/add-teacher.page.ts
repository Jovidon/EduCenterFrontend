import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
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
  user = new Teacher();
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private apiProvider :RestService, 
    private storage: Storage
  ) {
    storage.get('eduCenter').then(res => {
      this.user.EduCenter_id = res.id;
      this.apiProvider.getData('getteachers',res).then(res => {
        console.log(res);
      })
      
    })
  }

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

  addTeacher(){
    this.apiProvider.post('adduser', this.user).subscribe(res => {
      console.log(res);
      
    });
  }


}
