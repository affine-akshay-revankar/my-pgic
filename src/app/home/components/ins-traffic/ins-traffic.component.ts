import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import * as highchartsTreemap from 'highcharts/modules/treemap';
// highchartsTreemap(Highcharts);
declare var require: any;
let Tree = require('highcharts/modules/treemap');
Tree(Highcharts);

import { ApiService } from '../../../shared';

@Component({
  selector: 'app-ins-traffic',
  templateUrl: './ins-traffic.component.html',
  styleUrls: ['./ins-traffic.component.scss']
})
export class InsTrafficComponent implements OnInit {
  highcharts = Highcharts;
  tableData = [
    // {Time:"T1",Grooming :"0",Frozen:"0",Health:"0",Home:"0"}
  ]
  videoData = [];
   vimeoUrl = "https://affineindia-my.sharepoint.com/:v:/r/personal/astha_jagetiya_affineanalytics_com/Documents/TrainedVideos/mp4_videos/Checkout.mp4?csf=1&web=1&e=2MVCtI";
    youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
    dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
    yt_iframe_html: any;
    vimeo_iframe_html: any;
    dm_iframe_html: any;

  public treeMapOptions: any = {
    chart: {
      height: 150,
      width: 500,
    },
    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
      type: 'treemap',
      data: [{
        name: 'Cosmetics',
        value: 0,
        colorValue: 1
      }, {
        name: 'Frozen Food',
        value: 0,
        colorValue: 2
      }, {
        name: 'Personal Health Care',
        value: 0,
        colorValue: 3
      }, {
        name: 'Checkout',
        value: 0,
        colorValue: 4
      }]
    }],
    title: {
      text: ''
    }
  }

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {

    this.videoData.push(this.tableData);
    Highcharts.chart('treemap1', this.treeMapOptions);
    this.renderData();

  }

  renderData(){
    this.apiService.getStoreTrafficData().then(result => {
      this.renderUpdatedData(result);
    });
  }

  renderUpdatedData(data){
    let seconds = 0, intId, tsData, tsInd, tsLen, lts, ts, a, b, c, d;

    tsData = data["Time Stamp"];
    tsLen = tsData.length;
    lts = tsData[tsLen - 1];

    intId = setInterval(() => {

      tsInd = tsData.indexOf(++seconds);

      console.log({tsInd: console.log(), seconds: seconds});

      if( tsInd !== -1 ) {
        a = data["Cosmetics"][tsInd];
        b = data["Frozen Food"][tsInd];
        c = data["Personal Health Care"][tsInd];
        d = data["Checkout"][tsInd];

        this.treeMapOptions["series"][0].data = [{
          name: 'Cosmetics',
          value: a,
          colorValue: 1
        }, {
          name: 'Frozen Food',
          value: b,
          colorValue: 2
        }, {
          name: 'Personal Health Care',
          value: c,
          colorValue: 3
        }, {
          name: 'Checkout',
          value: d,
          colorValue: 4
        }];
        Highcharts.chart('treemap1', this.treeMapOptions);

        if ( tsInd == 0 ) {
          this.tableData[0] = {Time:`T${++tsInd}`,Grooming :a,Frozen:b,Health:c,Home:d};
        } else {
          this.tableData.push({Time:`T${++tsInd}`,Grooming :a,Frozen:b,Health:c,Home:d});
        }

      }
      if ( seconds >= lts ) {
        clearInterval(intId);
      }
    }, 1000);
  }

}
