
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
    this.apiservice.getPosReportData(params).then(data1 => {
      var data= {"Data" :[
        {
          "Av Customer Spend": 211.63412127440904,
          "City": "Bangalore",
          "Customers": 973,
          "Date": "2020-05-01",
          "Product": "Tide",
          "Revenue": 205920,
          "Segment": "Fabric Care",
          "State": "Karnataka",
          "Transaction": 973,
          "Units Sold": 1716
        },
        {
          "Av Customer Spend": 278.683314415437,
          "City": "Bangalore",
          "Customers": 881,
          "Date": "2020-05-02",
          "Product": "Tide",
          "Revenue": 245520,
          "Segment": "Fabric Care",
          "State": "Karnataka",
          "Transaction": 881,
          "Units Sold": 2046
        },
        {
          "Av Customer Spend": 220.3713527851459,
          "City": "Bangalore",
          "Customers": 1131,
          "Date": "2020-05-03",
          "Product": "Tide",
          "Revenue": 249240,
          "Segment": "Fabric Care",
          "State": "Karnataka",
          "Transaction": 1131,
          "Units Sold": 2077
        },
        {
          "Av Customer Spend": 220.62283737024222,
          "City": "Bangalore",
          "Customers": 867,
          "Date": "2020-05-04",
          "Product": "Tide",
          "Revenue": 191280,
          "Segment": "Fabric Care",
          "State": "Karnataka",
          "Transaction": 867,
          "Units Sold": 1594
        },
        {
          "Av Customer Spend": 231.47540983606558,
          "City": "Bangalore",
          "Customers": 1098,
          "Date": "2020-05-05",
          "Product": "Tide",
          "Revenue": 254160,
          "Segment": "Fabric Care",
          "State": "Karnataka",
          "Transaction": 1098,
          "Units Sold": 2118
        }
      ],
      "bottomFour_ByRevenue": [
        {
          "Product": "Tide",
          "Revenue": 249240,
          "Share Percent": 21.75
        },
        {
          "Product": "Tide",
          "Revenue": 245520,
          "Share Percent": 21.42
        },
        {
          "Product": "Tide",
          "Revenue": 205920,
          "Share Percent": 17.97
        },
        {
          "Product": "Tide",
          "Revenue": 191280,
          "Share Percent": 16.69
        }
      ],
      "bottomFour_ByUnitsSold": [
        {
          "Product": "Tide",
          "Share Percent": 21.75,
          "Units Sold": 2077
        },
        {
          "Product": "Tide",
          "Share Percent": 21.42,
          "Units Sold": 2046
        },
        {
          "Product": "Tide",
          "Share Percent": 17.97,
          "Units Sold": 1716
        },
        {
          "Product": "Tide",
          "Share Percent": 16.69,
          "Units Sold": 1594
        }
      ],
      "topFour_ByAvgCusSpends": [
        {
          "Av Customer Spend": 278.683314415437,
          "Product": "Tide",
          "Share Percent": 21.42
        },
        {
          "Av Customer Spend": 231.47540983606558,
          "Product": "Tide",
          "Share Percent": 22.18
        },
        {
          "Av Customer Spend": 220.62283737024222,
          "Product": "Tide",
          "Share Percent": 16.69
        },
        {
          "Av Customer Spend": 220.3713527851459,
          "Product": "Tide",
          "Share Percent": 21.75
        }
      ],
      "topFour_ByCustomers": [
        {
          "Customers": 1131,
          "Product": "Tide",
          "Share Percent": 21.75
        },
        {
          "Customers": 1098,
          "Product": "Tide",
          "Share Percent": 22.18
        },
        {
          "Customers": 973,
          "Product": "Tide",
          "Share Percent": 17.97
        },
        {
          "Customers": 881,
          "Product": "Tide",
          "Share Percent": 21.42
        }
      ],
      "topFour_ByRevenue": [
        {
          "Product": "Tide",
          "Revenue": 254160,
          "Share Percent": 22.18
        },
        {
          "Product": "Tide",
          "Revenue": 249240,
          "Share Percent": 21.75
        },
        {
          "Product": "Tide",
          "Revenue": 245520,
          "Share Percent": 21.42
        },
        {
          "Product": "Tide",
          "Revenue": 205920,
          "Share Percent": 17.97
        }
      ],
      "topFour_ByTransaction": [
        {
          "Product": "Tide",
          "Share Percent": 21.75,
          "Transaction": 1131
        },
        {
          "Product": "Tide",
          "Share Percent": 22.18,
          "Transaction": 1098
        },
        {
          "Product": "Tide",
          "Share Percent": 17.97,
          "Transaction": 973
        },
        {
          "Product": "Tide",
          "Share Percent": 21.42,
          "Transaction": 881
        }
      ],
      "topFour_ByUnitsSold": [
        {
          "Product": "Tide",
          "Share Percent": 22.18,
          "Units Sold": 2118
        },
        {
          "Product": "Tide",
          "Share Percent": 21.75,
          "Units Sold": 2077
        },
        {
          "Product": "Tide",
          "Share Percent": 21.42,
          "Units Sold": 2046
        },
        {
          "Product": "Tide",
          "Share Percent": 17.97,
          "Units Sold": 1716
        }
      ],
      "totalAvgCustomerSpend": 232.55740713625997,
      "totalRevenue": 1146120,
      "totalTransaction": 4950,
      "totalUnitsSold": 9551
    };
    console.log(data1);
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
      console.log(data);
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
