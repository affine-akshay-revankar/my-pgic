import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-man-vibrate-multi',
  templateUrl: './man-vibrate-multi.component.html',
  styleUrls: ['./man-vibrate-multi.component.scss']
})
export class ManVibrateMultiComponent implements OnInit {
  uploads:boolean = false;
  images:any;
  image:any;
  imagedatas:any;
  uploadedimage:any;
  processing:boolean = false;
  path:boolean = false;
  success:boolean = false;
  chooseFile:boolean = true;
  myaudio:any;
  selImgInd: number = -1;
  selImgObj: any;
  chartid:any;
  file: any;
  filterdata = [];
  DataResult:any = [];
  LabelResult:any = [];
  audioList = [
    {
      "id":1,
      "path":"http://182.156.213.183:8080/qc/combined_changed_final.wav",
      "name":"Multiple Issues in Series"
    },
    {
      "id":2,
      "path":"http://182.156.213.183:8080/qc/overlaid_final.wav",
      "name":"Multiple Issues in Parallel"
    }];
    normal:any;
    pitting:any;
    tooth:any;
    wear:any;
    show:any;
    public revenueoptions: any = {
        chart: {
          type: 'line',
          height:310,
          width:300
          },
          title: {
            text: '',
             align: 'center'
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
          categories: [],
          title: {
              text: 'Time'
          }

        },
        yAxis: {
           title: {
               text: 'Amplitude'
           }
       },
       plotOptions: {
          line: {
              dataLabels: {
                  enabled: false
              },
              enableMouseTracking: true
          }
      },
        series: [
          {
            data:[]

          }
        ]
      };
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }
  drawchart(){
    this.revenueoptions.series[0].data=this.DataResult;
    this.revenueoptions.xAxis.categories = this.LabelResult;
    this.revenueoptions.title.text=this.chartid;
    Highcharts.chart(this.chartid, this.revenueoptions);

  }
  selectimage(i){

    var x = document.images.length;
    this.selImgInd = i;
    this.chartid=this.audioList[i].name;
    this.images = this.audioList[i].path;
  var resp = ["Normal", "Tooth Fracture", "Wear", "Pitting"];

  var res = [];
  var j = 0;

  var interval1 = setInterval(() => {
    if(i == 0){
      this.show='single';
      if (resp[j] == "Normal") {
      this.normal="0"+j;
    }
    else if (resp[j] == "Pitting") {
      this.pitting="0"+j;
    }
    else if (resp[j] == "Tooth Fracture") {
      this.tooth="0"+j;
    }
    else if (resp[j] == "Wear") {
  this.wear="0"+j;
    }
  }
  else if (i == 1){
    this.show='multi';
    if (resp[j] == "Normal") {
      this.normal="1"+j;
    }
    if (resp[j] == "Pitting") {
      this.pitting="1"+j;
      this.wear="1"+j;
    }
    if (resp[j] == "Tooth Fracture") {
      this.pitting="1"+j;
      this.wear="1"+j;
    }
    if (resp[j] == "Wear") {
      this.wear="1"+j;
      this.tooth="1"+j;
    }
  }
    j +=1;
    if (j>= 5) {
      clearInterval(interval1);
    }}, 5000 );

    // var soundfile = document.getElementById("myaudio");
    this.apiService.analyseVibration(this.images).then((result:any) => {
      var imgdata = result;
      this.imagedatas=result;
      var array = eval(imgdata.data8);
        var count = array.length;
        var counter = 0;
        this.DataResult= array.slice(0, 16000);
        this.LabelResult= [];

        for (let i = 1; i <= 16000; i++) {
          this.LabelResult.push((i/16000).toString());
        }
          this.drawchart();
          var loop = 1;
          var clearint9 = setInterval(()=> {
          if (loop < 20) {
            this.DataResult = array.slice(
              loop * 16000,
              (loop + 1) * 16000
            );

            this.LabelResult = [];
            for (let i = loop * 16000 + 1; i <= (loop + 1) * 16000; i++) {
              this.LabelResult.push((i/16000).toString());
            }

          this.drawchart();
            loop++;
          }
        }, 900);

        });


  }


  }
