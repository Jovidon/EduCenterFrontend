import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  // @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('lineCanvas', {static: true}) lineCanvas: ElementRef;
  @ViewChild('doughnutCanvas1', {static: true}) doughnutCanvas1: ElementRef;
  @ViewChild('doughnutCanvas2', {static: true}) doughnutCanvas2: ElementRef;

  private doughnutChart1: Chart;
  private doughnutChart2: Chart;
  private lineChart: Chart;
  // private barChart: Chart;
  // private doughnutChart: Chart;
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
    const canvas = <HTMLCanvasElement> document.getElementById('can');
    const ctx = canvas.getContext('2d');
    const firstLine = ctx.createLinearGradient(0, 500, 0, 100);
    const secondLine = ctx.createLinearGradient(0, 500, 0, 100);
    firstLine.addColorStop(0, 'transparent');
    firstLine.addColorStop(0.5, 'transparent');
    firstLine.addColorStop(1, 'rgba(75,192,192, 0.3)');
    secondLine.addColorStop(0, 'transparent');
    secondLine.addColorStop(0.5, 'transparent');
    secondLine.addColorStop(1, 'rgba(255, 125, 212, 0.3)');

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: true,
            lineTension: 0.4,
            backgroundColor: firstLine,
            borderColor: 'rgb(75,192,192)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          },
          {
            label: 'My Second dataset',
            fill: true,
            lineTension: 0.4,
            backgroundColor: secondLine,
            borderColor: 'rgb(255, 125, 212)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [60, 50, 80, 88, 52, 35, 40],
            spanGaps: false
          }
        ]
      }
    });

    this.doughnutChart1 = new Chart(this.doughnutCanvas1.nativeElement, {
      type: 'doughnut',
      options: {
        legend: {
          display: true,
          position: 'bottom',
        }
      },
      data: {
        labels: ['Red', 'Blue'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB']
          }
        ]
      }
    });
    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
      type: 'doughnut',
      weight: 0.5,
      options: {
        legend: {
          display: true,
          position: 'right',
        }
      },
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });
  }

}
