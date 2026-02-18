import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChartType } from '../../saas.model';

@Component({
    selector: 'app-sellingchart',
    templateUrl: './sellingchart.component.html',
    styleUrls: ['./sellingchart.component.scss'],
    standalone: true,
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SellingchartComponent implements OnInit {

  @Input() Chartcolor;
  @Input() value;

  chartData: ChartType;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      series: [this.value],
      chart: {
        type: 'radialBar',
        width: 60,
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: [this.Chartcolor],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%'
          },
          track: {
            margin: 0
          },
          dataLabels: {
            show: false
          }
        }
      }
    };
  }
}
