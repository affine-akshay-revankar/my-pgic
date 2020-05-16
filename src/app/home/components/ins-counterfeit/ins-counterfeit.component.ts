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
  path:boolean = false;
  success:boolean = false;
  chooseFile:boolean = true;
  product=[
    {id:1,name:"Tide"},
    {id:1,name:"Head & Shoulders"},
]
  array=[
    {id:1,path:"../../../../assets/Tide/tide1.jpg",name:"Tide"},
    {id:2,path:"../../../../assets/Tide/tide2.jpg",name:"Tide"},
    {id:3,path:"../../../../assets/Tide/tide3.png",name:"Tide"},
    {id:4,path:"../../../../assets/Tide/tide4.jpg",name:"Tide"},
    {id:5,path:"../../../../assets/Tide/tide5.png",name:"Tide"},
    {id:6,path:"../../../../assets/Head & Sholder/H1.jpg",name:"Head & Shoulders"},
    {id:7,path:"../../../../assets/Head & Sholder/H2.jpg",name:"Head & Shoulders"},
    {id:8,path:"../../../../assets/Head & Sholder/H3.jpg",name:"Head & Shoulders"},
]
filterdata =[];
  constructor() { }

  ngOnInit(): void {
  }
  selectproduct(product){
    console.log(product);
    this.filterdata= this.array.filter(function(obj) {
      console.log(obj.name);
      return obj.name === product;
    })
//     if(product === "Tide"){
//     this.filterdata= this.array.filter(function(obj) {
//       return obj.name === "Tide";
//     })
//   }else if(product === "Head & Shoulders"){
//     this.filterdata= this.array.filter(function(obj) {
//       return obj.name === "Head & Shoulders";
//   })
// }
    console.log(this.filterdata)
  }
  selectimage(){
    this.images = document.getElementById("myImg").getAttribute("src");

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
}
}
