import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

@Component({
  selector: 'app-man-vibrate-multi',
  templateUrl: './man-vibrate-multi.component.html',
  styleUrls: ['./man-vibrate-multi.component.scss']
})
export class ManVibrateMultiComponent implements OnInit {
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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  selectimage(i){

    var x = document.images.length;
    this.selImgInd = i;
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
      console.log(result);
      var imgdata = result;

        var array = eval(imgdata.data8);


        console.log(array);
  var count = array.length;
  var counter = 0;
  var DataResult = array.slice(0, 16000);
  var LabelResult = [];

  });

  }

  //
  // drawchart(){
  // Highcharts.chart('chart', this.revenueoptions);
  //
  // }
  }
