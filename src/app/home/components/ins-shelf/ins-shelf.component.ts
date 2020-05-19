import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

@Component({
  selector: 'app-ins-shelf',
  templateUrl: './ins-shelf.component.html',
  styleUrls: ['./ins-shelf.component.scss']
})
export class InsShelfComponent implements OnInit {
  allowControls = false;
array1={T1:null,T2:null,T3:null,T4:null,T5:null}
array2={T1:null,T2:null,T3:null,T4:null,T5:null}

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    var vid1 = <HTMLVideoElement>document.getElementById("myVideo1");
    var vid2 = <HTMLVideoElement>document.getElementById("myVideo2");
    vid1.autoplay = true;
    vid2.autoplay = true;
    this.apiService.getShelfInventoryData().then(result => {
      var data=[{"product": "cola", "counts": [4, 3, 3, 2, 2], "timestamps": [2, 4, 6, 8, 10]}, {"product": "maggi", "counts": [4, 3, 3, 2, 2], "timestamps": [2, 4, 6, 8, 10]}]
      var res2=[];
      var res1=[];
      var i=0;
      var j=0;
      res1 = data[0]["counts"];
      res2 = data[1]["counts"];

      var interval = setInterval(() => {
       this.array1["T"+(i+1)]= res1[i];
        i +=1;
        if (i>= res1.length) {
          clearInterval(interval);
        }}, 2000 );

      var interval1 = setInterval(() => {
      this.array2["T"+(j+1)]= res2[j]
        j +=1;
        if (j>= res2.length) {
          clearInterval(interval1);
        }}, 2000 );

});

  }

}
