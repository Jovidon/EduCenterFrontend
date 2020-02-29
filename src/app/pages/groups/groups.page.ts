import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  movies: string;
}


@Component({
  selector: 'groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'id' },
      { name: 'guruhname' },
      { name: 'holati' },
      { name: 'fannomi' },
      { name: 'shakli' },
      { name: 'miqdori' },
      { name: 'teacher' }
    ];

    this.http.get<Data>('../../assets/grup.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.movies;
      });
  }
  async open(row){
    console.log(row);
  }


  ngOnInit() {
  }

}
