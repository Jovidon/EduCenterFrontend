import { Component, OnInit } from '@angular/core';
import { RestService } from '../../providers/api'

@Component({
  selector: 'main-sign-in',
  templateUrl: './main-sign-in.page.html',
  styleUrls: ['./main-sign-in.page.scss'],
})
export class MainSignInPage implements OnInit {
  signup = {
    phone: '',
    password: '',
  };
  constructor(private apiProvider :RestService) { }

  ngOnInit() {
  }
  
  logIn() {
    this.apiProvider.post('login',this.signup).subscribe(res=>{
      if(res.status){
        console.log("to'g'ri kiritildi");
      }
      else{
        console.log("xato kiritildi")
      }
    })
  }

}
