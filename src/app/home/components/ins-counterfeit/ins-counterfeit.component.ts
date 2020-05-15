import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ins-counterfeit',
  templateUrl: './ins-counterfeit.component.html',
  styleUrls: ['./ins-counterfeit.component.scss']
})
export class InsCounterfeitComponent implements OnInit {
  uploads:boolean = false;
  images:any;
  image:any;
  uploadedimage:any;
  processing:boolean = false;
  array=[
    {id:1,name:"tide"},
    {id:2,name:"tide"},
    {id:3,name:"tide"},
    {id:4,name:"Head & Holders"},
    {id:5,name:"Head & Holders"},
    {id:6,name:"Head & Holders"},
]
  constructor() { }

  ngOnInit(): void {
  }
  selectproduct(event){
    console.log(event);
    this.array.filter(obj=>{
      return obj.name === "tide";
    })
    console.log(this.array)
  }
  selectimage(){
    this.images = document.getElementById("myImg").getAttribute("src");

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
