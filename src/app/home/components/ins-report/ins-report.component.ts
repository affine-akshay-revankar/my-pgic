import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { SharedPipesModule  } from '../../../shared';
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-ins-report',
  templateUrl: './ins-report.component.html',
  styleUrls: ['./ins-report.component.scss']
})
export class InsReportComponent implements OnInit {
  levelList:any=[1,2,3,4];
  geographyList: any=["India","USA","APAC"];
  productList: any=["Tide","Head&Shoulders","SurfExcel"]
  level: any;
  product: any;
  geography:any;
  startDate: any;
  endDate:any;
  totaltranscation: any =123;
  requests = [
    {product:"T1",unit :"8",sale:"7"},
    {product:"T2",unit :"9",sale:"7"},
    {product:"T3",unit :"8",sale:"5"},
    {product:"T4",unit :"6",sale:"7"}];
    requests1=[
    {product:"T5",unit :"8",sale:"7"},
    {product:"T6",unit :"8",sale:"4"},
    {product:"T7",unit :"8",sale:"7"},
    {product:"T8",unit :"8",sale:"9"},
  ]
  public revenueoptions: any = {
      chart: {
        type: 'line',
        height:310,
        width:300
        },
      title: {
        text: 'Revenue',
         align: 'left'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function() {
          return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
            ' y: ' + this.y.toFixed(2);
        }
      },
      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function() {
            return Highcharts.dateFormat('%e %b %y', this.value);
          }
        }
      },
      yAxis: {
         title: {
             text: 'Revenue'
         }
     },
     plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
      series: [
        {  name: 'Revenue',
          data: [
                [new Date('2018-01-25 18:38:31').getTime(), 7.0],
                [new Date('2018-01-26 18:38:31').getTime(), 6.9],
                [new Date('2018-01-20 18:38:31').getTime(), 9.5],
                [new Date('2018-01-19 18:38:31').getTime(), 14.5],
                [new Date('2018-02-20 18:38:31').getTime(), 18.4],
                [new Date('2018-02-25 18:38:31').getTime(), 21.5],
                [new Date('2018-02-27 18:38:31').getTime(), 25.2],
                [new Date('2018-03-01 18:38:31').getTime(), 26.5],
                [new Date('2018-03-15 18:38:31').getTime(), 23.3],
                [new Date('2018-03-17 18:38:31').getTime(), 18.3],
                [new Date('2018-04-25 18:38:31').getTime(), 13.9],
                [new Date('2018-05-25 18:38:31').getTime(), 9.6]
            ]
        }
      ]
    }

    public quantityOptions: any = {
        chart: {
          type: 'line',
          height:310,
          width:300
          },
        title: {
          text: 'Quantity Sold(Units)',
           align: 'left'
        },
        credits: {
          enabled: false
        },
        tooltip: {
          formatter: function() {
            return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
              ' y: ' + this.y.toFixed(2);
          }
        },
          yAxis: {
           title: {
               text: 'Quantity Sold'
           }
       },
       plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: true
          }
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
      }

      public productOptions: any = {
          chart: {
            type: 'line',
            height:310,
            width:300
            },
          title: {
            text: 'Average Customer Spend(INR)',
             align: 'left'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            formatter: function() {
              return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
                ' y: ' + this.y.toFixed(2);
            }
          },
            yAxis: {
             title: {
                 text: 'Quantity Sold'
             }
         },
         plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
        }

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('revenuechart', this.revenueoptions);
      Highcharts.chart('quantitychart', this.quantityOptions);
      Highcharts.chart('productchart', this.productOptions);
      }

  onChange(data : any) {
    this.level = data;
}
getfilterData(){
  console.log(this.level);
}
}
