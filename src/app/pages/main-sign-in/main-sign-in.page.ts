import { Component, OnInit } from '@angular/core';
import { RestService } from '../../providers/api';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router'

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
  constructor(private apiProvider :RestService, private storage: Storage, private router: Router) { }

  ngOnInit() {
  }
  
  logIn() {
    this.apiProvider.post('login',this.signup).subscribe(res=>{
      if(res.status){
        console.log("to'g'ri kiritildi");
        this.storage.set('eduCenter' , res).then((res) => {
          this.router.navigate(['/schedule']);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      else{
        console.log("xato kiritildi")
      }
    })
  }

}
