import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ins-shelf',
  templateUrl: './ins-shelf.component.html',
  styleUrls: ['./ins-shelf.component.scss']
})
export class InsShelfComponent implements OnInit {
  allowControls = false;
  array1=[
    {id:1,T0:1,T1:1,T2:3,T3:5},
  ]
  array2=[
    {id:1,T0:100,T1:90,T2:80,T3:70},
  ]
  array=[];
  constructor() { }

  ngOnInit(): void {
    var vid1 = <HTMLVideoElement>document.getElementById("myVideo1");
    var vid2 = <HTMLVideoElement>document.getElementById("myVideo2");
    vid1.autoplay = true;
    vid2.autoplay = true;
    this.array.push(this.array1);
    console.log(this.array);
  }

}
