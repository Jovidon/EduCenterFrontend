import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  tables: string;
}

@Component({
  selector: 'tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'ism' },
      { name: 'fani' },
      { name: 'du' },
      { name: 'se' },
      { name: 'ch' },
      { name: 'pa' },
      { name: 'ju' },
      { name: 'sha' },
      { name: 'ya' },
    ];

    this.http.get<Data>('../../assets/tables.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.tables;
      });
  }
  async open(row){
    console.log(row);
  }


  ngOnInit() {
  }

}
