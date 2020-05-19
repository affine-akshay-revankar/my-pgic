import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

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
  path:boolean = false;
  success:boolean = false;
  chooseFile:boolean = true;
  array=[

    {id:1,path:"./assets/Tide/Tide_1.png",name:"Tide"},
    {id:2,path:"./assets/Tide/Tide_3.jpg",name:"Tide"},
    {id:3,path:"../../../../assets/Tide/tide3.png",name:"Tide"},
    {id:4,path:"../../../../assets/Tide/tide4.jpg",name:"Tide"},
    {id:5,path:"../../../../assets/Tide/tide5.png",name:"Tide"},
    {id:6,path:"../../../../assets/Head & Sholder/H1.jpg",name:"Head & Holders"},
    {id:7,path:"../../../../assets/Head & Sholder/H2.jpg",name:"Head & Holders"},
    {id:8,path:"../../../../assets/Head & Sholder/H3.jpg",name:"Head & Holders"},
  ]
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event){
    console.log(event);
  }
  selectimage(){
    var x = document.images.length;
    console.log(x);
    this.images = document.getElementById('myImg').getAttribute('src');
    console.log(this.images)
    this.uploads = true;
    this.processing = false;
    this.chooseFile = false;
    this.path = true;
  }

  upload(){
    const formData = new FormData;
    formData.append('file', this.images);
    console.log(this.images);
    this.image = this.images ;
    console.log(this.image);
    console.log(event);
    this.processing = true;
    this.success = true;
  }

  process(){
    this.uploadedimage = this.images;
    console.log(this.uploadedimage);
    let lastSlashIdx = this.images.lastIndexOf("/");
    let lastDotIdx = this.images.lastIndexOf(".");
    let filename = this.images.substring(lastSlashIdx + 1, lastDotIdx);
    console.log(filename);
    this.apiService.getEstimatedPos({filename: filename}).then(result => {
      console.log(result);
      // if( result && result["Category"] && result["Probability"] ) {
      //   let prob = result["Probability"];
      //   this.response = {
      //     Category: result["Category"],
      //     Probability: (prob * 100).toFixed(2)
      //   }
      // } else {
      //   this.response = {
      //     Category: "",
      //     Probability: ""
      //   }
      // }
    });
    this.uploadedimage = this.selImgObj.path;
  }

}
