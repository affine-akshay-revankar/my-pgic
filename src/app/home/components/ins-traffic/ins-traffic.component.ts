import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

// import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-ins-traffic',
  templateUrl: './ins-traffic.component.html',
  styleUrls: ['./ins-traffic.component.scss']
})
export class InsTrafficComponent implements OnInit {
  highcharts = Highcharts;
  array = [
    {Time:"T1",Grooming :"8",Frozen:"7",Health:"10",Home:"8"},
    {Time:"T2",Grooming :"9",Frozen:"7",Health:"10",Home:"8"},
    {Time:"T3",Grooming :"8",Frozen:"5",Health:"10",Home:"8"},
    {Time:"T4",Grooming :"6",Frozen:"7",Health:"3",Home:"8"},
    {Time:"T5",Grooming :"8",Frozen:"7",Health:"10",Home:"8"},
    {Time:"T6",Grooming :"8",Frozen:"4",Health:"10",Home:"8"},
    {Time:"T7",Grooming :"8",Frozen:"7",Health:"15",Home:"8"},
    {Time:"T8",Grooming :"8",Frozen:"9",Health:"10",Home:"8"},
  ]
  array1 = [];
   vimeoUrl = "https://affineindia-my.sharepoint.com/:v:/r/personal/astha_jagetiya_affineanalytics_com/Documents/TrainedVideos/mp4_videos/Checkout.mp4?csf=1&web=1&e=2MVCtI";
    youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
    dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
    yt_iframe_html: any;
    vimeo_iframe_html: any;
    dm_iframe_html: any;

  //    chart = new Chart({
  //     chart : {
  //        type: 'Highcharts Treemap'
  //     },
  //     title: {
  //       text: 'Highcharts Treemap'
  //     },
  //     colorAxis : {
  //       minColor: '#FFFFFF',
  //       maxColor: Highcharts.getOptions().colors[0]
  //    }
  //
  // });

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.array);
    this.array1.push(this.array);
    console.log(this.array1);

    Highcharts.chart('treemap1', {
  series: [{
    type: "treemap",
    layoutAlgorithm: 'stripes',
    alternateStartingDirection: true,
    levels: [{
      level: 1,
      layoutAlgorithm: 'sliceAndDice',
      dataLabels: {
        enabled: true,
        align: 'left',
        verticalAlign: 'top',
        style: {
          fontSize: '15px',
          fontWeight: 'bold'
        }
      }
    }],
    data: [{
      id: 'A',
      name: 'Apples',
      color: "#EC2500"
    }, {
      id: 'B',
      name: 'Bananas',
      color: "#ECE100"
    }, {
      id: 'O',
      name: 'Oranges',
      color: '#EC9800'
    }, {
      name: 'Anne',
      parent: 'A',
      value: 5
    }, {
      name: 'Rick',
      parent: 'A',
      value: 3
    }, {
      name: 'Peter',
      parent: 'A',
      value: 4
    }, {
      name: 'Anne',
      parent: 'B',
      value: 4
    }, {
      name: 'Rick',
      parent: 'B',
      value: 10
    }, {
      name: 'Peter',
      parent: 'B',
      value: 1
    }, {
      name: 'Anne',
      parent: 'O',
      value: 1
    }, {
      name: 'Rick',
      parent: 'O',
      value: 3
    }, {
      name: 'Peter',
      parent: 'O',
      value: 3
    }, {
      name: 'Susanne',
      parent: 'Kiwi',
      value: 2,
      color: '#9EDE00'
    }]
  }],
  title: {
    text: 'Fruit consumption'
  }
});


  }

}
