import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  movies: string;
}

@Component({
  selector: 'students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'id' },
      { name: 'ISM' },
      { name: 'Guruh' },
      { name: 'Tel' },
      { name: 'Guruhlar' },
      { name: 'Vaqti' },
      { name: 'Holati' },
      { name: 'Balance' },
      { name: 'Action' },
    ];

    this.http.get<Data>('../../assets/movies.json')
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
