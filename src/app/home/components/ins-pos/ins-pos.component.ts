import { Component, OnInit } from '@angular/core';
// import {listFiles} from 'list-files-in-dir';

@Component({
  selector: 'app-ins-pos',
  templateUrl: './ins-pos.component.html',
  styleUrls: ['./ins-pos.component.scss']
})
export class InsPosComponent implements OnInit {
uploads:boolean = false;
images:any;
image:any;
uploadedimage:any;
processing:boolean = false;
uploadbutton:boolean = true;
reportbutton:boolean =false;
array = [];
// allImages=[
//   {path:"../../assets/Tide/tide.jpg"},
//   {path:"../../assets/Tide/tide1.jpg"},
//   {path:"../../assets/Tide/tide2.jpg"}
// ]
  constructor() { }

  ngOnInit(): void {
  }
  uploadBtn(){
    this.uploadbutton = true;
    this.reportbutton = false;
  }
  reportBtn(){
    this.uploadbutton = false;
    this.reportbutton = true;
  }
  // selectedfile(value){
  //    document.getElementById('myFileInput').click();
  // }
  // url = "../../assets/";
  onFileChange(event){
    console.log(event);
  }
  selectimage(){
    // const name =  img.src
    // console.log(img.src);
    // console.log("ssssssssss",name);
    // console.log(img.images);
    var x = document.images.length;
    console.log(x);
    for(let i=0;i<x;i++){
     this.images = document.getElementsByClassName('myImg')[i].getAttribute('src');
    }
    console.log(this.images)
     this.uploads = true;
     this.processing = false;

  }
  

  upload(){
    const formData = new FormData;
    formData.append('file', this.images);
    console.log(this.images);
    this.image = this.images ;
    console.log(this.image);
    console.log(event);
    this.processing = true;
  }
  process(){
    this.uploadedimage = this.images;
    console.log(this.uploadedimage);
  }

}
