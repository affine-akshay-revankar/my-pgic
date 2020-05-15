import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import * as Highcharts from 'highcharts';
import * as highchartsTreemap from 'highcharts/modules/treemap';
import { Chart } from 'angular-highcharts';
// highchartsTreemap(Highcharts);
@Component({
  selector: 'app-ins-traffic',
  templateUrl: './ins-traffic.component.html',
  styleUrls: ['./ins-traffic.component.scss']
})
export class InsTrafficComponent implements OnInit {
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
  vimeoUrl = "https://vimeo.com/197933516";
  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
  dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
  yt_iframe_html: any;
  vimeo_iframe_html: any;
  dm_iframe_html: any;

  chart = new Chart({       
    chart : {
       type: 'Highcharts Treemap'   
    },
    title: {
      text: 'Data'
    },    
    credits: {
      enabled: false
    },  
    series : [{
      type: "treemap",
      layoutAlgorithm: 'squarified',
      data: [
      {
         name: 'A',
         value: 6,
         colorValue: 1
      }, 
      {
         name: 'B',
         value: 6,
         colorValue: 2
      },
      {
        name: 'C',
        value: 4,
        colorValue: 3
     }, 
     {
        name: 'D',
        value: 3,
        colorValue: 4
     }, 
     {
        name: 'E',
        value: 2,
        colorValue: 5
     }, 
     {
        name: 'F',
        value: 2,
        colorValue: 6
     }, 
     {
        name: 'G',
        value: 1,
        colorValue: 7
     }
      ]
   }]     
  
})
  constructor(private embedService: EmbedVideoService) { 
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
    this.vimeo_iframe_html = this.embedService.embed(this.vimeoUrl);
    this.dm_iframe_html = this.embedService.embed(this.dailymotionUrl);
  }

  ngOnInit(): void {
  }

}
