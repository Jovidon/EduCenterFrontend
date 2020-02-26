import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public serverDomain = 'https://shielded-forest-95966.herokuapp.com/'
  public link : string="https://shielded-forest-95966.herokuapp.com/";
  logic : boolean;
  serverdata : any;
  header = new HttpHeaders();

  constructor(
    public http: HttpClient,
    private toast : ToastController,) {
      this.header = new HttpHeaders({
        'Content-Type': "application/json",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm92aWQiLCJnZW5kZXIiOiIxIiwicGhvbmUiOiI5OTg5MDE5MTczODMiLCJqb2IiOiJqb2Igbm90IGZvdW5kIiwiUmVnaW9uX2lkIjoiMSIsImlhdCI6MTU3MTQ4MTg0M30.YFYK6h3jVrSYNf-KJbWpSr2iCVd-BDvMOZ73RuZqXuE"
      });
  }

  public getData(url, data?) {
    return new Promise(resolve => {
      this.http.get( this.link + url, {params: data, headers: this.header} ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  public getDataWithParams(url, params) {
    return new Promise(resolve => {
      this.http.post( this.link + url, params).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public deleteData(url,data) {
    return new Promise(resolve => {
      this.http.delete( this.link + url,{ params: data ,headers: this.header} ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  } 

  public post(url, param): Observable<any>{
    return this.http.post(this.link + url,param, {headers: this.header});
  }

  public put(url, param): Observable<any> {
    return this.http.put(this.link + url,param, {headers: this.header});
  }

}
