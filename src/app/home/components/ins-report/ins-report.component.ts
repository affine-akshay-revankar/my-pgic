
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/shared/services/api.service';

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
  countrylist:any=["India","USA"];
  statelist: any=["Karnataka","Maharashtra","kerala"];
  productList: any=["Tide","Head&Shoulders","SurfExcel"];
  citylist:any=["Bangalore","Mangalore"];
  country: any= "";
  product: any ="";
  state:any="";
  city:any="";
  startDate: any="";
  endDate:any="";
  totalAvgCustomerSpend: number;
  totalRevenue: number;
  totalTransaction: number;
  totalUnitsSold: number;
  bottomFour_ByRevenue:any;
  bottomFour_ByUnitsSold:any;
  topFour_ByRevenue:any;
  topFour_ByUnitsSold:any;

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
          return 'x: ' +  this.x +
            ' y: ' + this.y;
        }
      },
      xAxis: {
        type: 'linear',
        rotation: -45,
        categories: []

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
          data:[]

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
            return 'x: ' + this.x +
              ' y: ' + this.y;
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
          categories: []
      },

      series: [{
          data: []
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
              return 'x: ' + this.x +
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
          rotation: -45,
          categories: []
        },

        series: [{
          data: []
        }]
        }

  constructor(
    private apiservice: ApiService

  ) {
  }

  ngOnInit(): void {
    var params ={
      'from': '2020-05-01',
      'to':'2020-05-09',
    'state':'Karnataka',
    'city':'Bangalore',
    'product':'Tide'
    };
    this.apiservice.getPosReportData(params).then(data => {
      this.totalAvgCustomerSpend= data.totalAvgCustomerSpend.toFixed(2);
      this.totalRevenue=data.totalRevenue;
      this.totalTransaction=data.totalTransaction;
      this.totalUnitsSold=data.totalUnitsSold;
      this.bottomFour_ByRevenue = data.bottomFour_ByRevenue;
      this.bottomFour_ByUnitsSold= data.bottomFour_ByUnitsSold;
      this.topFour_ByRevenue= data.topFour_ByRevenue;
      this.topFour_ByUnitsSold= data.topFour_ByUnitsSold;
      var revenuegraphdata:any=[];
      var avgspendgraphdata:any=[];
      var unitsgraphdata:any=[];
      var xaxisdates:any=[];
      for(let i=0; i<data.Data.length;i++){
          xaxisdates.push(data.Data[i].Date);
      }
      for(let i=0; i<data.Data.length;i++){
        revenuegraphdata.push(data.Data[i].Revenue);
      }
      this.revenueoptions.xAxis.categories = xaxisdates;
      this.revenueoptions.series[0].data= revenuegraphdata;
      for(let i=0; i<data.Data.length;i++){
          unitsgraphdata.push(data.Data[i]['Units Sold']);
      }
      this.quantityOptions.series[0].data= unitsgraphdata;
      this.quantityOptions.xAxis.categories = xaxisdates;
      for(let i=0; i<data.Data.length;i++){
          avgspendgraphdata.push(data.Data[i]['Av Customer Spend']);
      }
      this.productOptions.series[0].data= avgspendgraphdata;
      this.productOptions.xAxis.categories = xaxisdates;
      this.drawchart();
    });

      }
      drawchart(){
      Highcharts.chart('revenuechart', this.revenueoptions);
        Highcharts.chart('quantitychart', this.quantityOptions);
        Highcharts.chart('productchart', this.productOptions);
      }

//   onChange(data : any) {
//     this.level = data;
// }
getfilterData(){
  var params ={
      'from': this.startDate,
      'to':this.endDate,
      'state':this.state,
      'city':this.city,
      'product':this.product
    };
    if(this.startDate && this.endDate&& this.state && this.city && this.product){
  this.apiservice.getPosReportData(params).then(data => {
      this.totalAvgCustomerSpend= data.totalAvgCustomerSpend.toFixed(2);
      this.totalRevenue=data.totalRevenue;
      this.totalTransaction=data.totalTransaction;
      this.totalUnitsSold=data.totalUnitsSold;
      this.bottomFour_ByRevenue = data.bottomFour_ByRevenue;
      this.bottomFour_ByUnitsSold= data.bottomFour_ByUnitsSold;
      this.topFour_ByRevenue= data.topFour_ByRevenue;
      this.topFour_ByUnitsSold= data.topFour_ByUnitsSold;
      var revenuegraphdata:any=[];
      var avgspendgraphdata:any=[];
      var unitsgraphdata:any=[];
      var xaxisdates:any=[];
      for(let i=0; i<data.Data.length;i++){
          xaxisdates.push(data.Data[i].Date);
      }
      for(let i=0; i<data.Data.length;i++){
        revenuegraphdata.push(data.Data[i].Revenue);
      }
      this.revenueoptions.xAxis.categories = xaxisdates;
      this.revenueoptions.series[0].data= revenuegraphdata;
      for(let i=0; i<data.Data.length;i++){
          unitsgraphdata.push(data.Data[i]['Units Sold']);
      }
      this.quantityOptions.series[0].data= unitsgraphdata;
      this.quantityOptions.xAxis.categories = xaxisdates;
      for(let i=0; i<data.Data.length;i++){
          avgspendgraphdata.push(data.Data[i]['Av Customer Spend']);
      }
      this.productOptions.series[0].data= avgspendgraphdata;
      this.productOptions.xAxis.categories = xaxisdates;
      this.drawchart();
    });
}
else{
  alert("Please select filters");
}
}
}
