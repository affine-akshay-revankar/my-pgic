import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

@Component({
  selector: 'app-man-vibrate',
  templateUrl: './man-vibrate.component.html',
  styleUrls: ['./man-vibrate.component.scss']
})
export class ManVibrateComponent implements OnInit {

  uploads:boolean = false;
  images:any;
  image:any;
  uploadedimage:any;
  processing:boolean = false;
  path:boolean = false;
  success:boolean = false;
  chooseFile:boolean = true;
  myaudio:any;
  selImgInd: number = -1;
  selImgObj: any;
  file: any;
  filterdata = [];
  audioList = [
    {
      "id":1,
      "path":"http://182.156.213.183:8080/qc/normal.wav",
      "name":"Normal Sound",
      "dest":""
      },
    {
      "id":2,
      "path":"http://182.156.213.183:8080/qc/pitting.wav",
      "name":"Pitting Sound",
      "dest":"",
      "diff":"",
      "amp":""
    },
    {
      "id":3,
      "path":"http://182.156.213.183:8080/qc/tooth_fracture.wav",
      "name":"Tooth Fracture  Sound",
      "dest":"",
      "diff":"",
      "amp":""
    },
    {
      "id":4,
      "path":"http://182.156.213.183:8080/qc/wear.wav",
      "name":"Wear Sound",
      "dest":"",
      "diff":"",
      "amp":""
    }
  ];
  public revenueoptions: any = {
      chart: {
        type: 'line',
        height:310,
        width:300
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
    }
  constructor(
      private apiService: ApiService
  ) { }


  ngOnInit(): void {

    }


  selectimage(i){

    var x = document.images.length;
    this.selImgInd = i;
    this.images = this.audioList[i].path;
    this.apiService.analyseVibration(this.images).then((result:any) => {
        var  base="http://182.156.213.183:8080/qc/";
        var imgdata = result;
        this.uploadedimage = imgdata.data1;
        var array = eval(imgdata.data8);
        if(this.audioList[i].name == "Normal Sound"){
          this.audioList[i].dest= base+imgdata.data1;
        }
        else{
          this.audioList[i].dest= base+imgdata.data3;
          this.audioList[i].diff= base+imgdata.data6;
          this.audioList[i].amp= base+imgdata.data7;
        }

          });

}

// drawchart(){
// Highcharts.chart('chart', this.revenueoptions);
//
// }
  }
