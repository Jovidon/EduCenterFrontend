import { Component, OnInit } from '@angular/core';
import { RestService } from '../../providers/api';

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  signup = {
    name: '',
    address: '',
    email: '',
    password: '',
    info: '',
    phone: '',
    Regions_id: 1
  };
  constructor(private apiProvider :RestService) { }

  ngOnInit() {
  }
  signUp(){
    this.apiProvider.post('addeducenter',this.signup).subscribe(res=>{
      console.log(res);
    });
  }
  logFun(){
    console.log(this.signup);
  }

}
