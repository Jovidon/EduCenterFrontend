import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  selectOptions = [
    {
      selected: false,
      text: 'So\'nggi 1 yildagi',
      value: 1
    },
    {
      selected: true,
      text: 'So\'nggi 6 oydagi',
      value: 2
    },
    {
      selected: false,
      text: 'So\'nggi 3 oydagi',
      value: 3
    },
    {
      selected: false,
      text: 'So\'nggi 1 oydagi',
      value: 4
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
