import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

@Component({
  selector: 'app-man-corrosion',
  templateUrl: './man-corrosion.component.html',
  styleUrls: ['./man-corrosion.component.scss']
})
export class ManCorrosionComponent implements OnInit {

  uploads:boolean = false;
  images:any;
  image:any;
  uploadedimage:any;
  processing:boolean = false;
  path:boolean = false;
  success:boolean = false;
  chooseFile:boolean = true;

  selImgInd: number = -1;
  selImgObj: any;

  product = [
    {id:1,name:"Tide"},
    {id:1,name:"Head & Shoulders"},
  ];

  imagesList = [
    {
      "id":1,
      "path":"./assets/Corrosion/Corrosion_1.jpg",
      "name":"Corrosion"
    },
    {
      "id":2,
      "path":"./assets/Corrosion/Corrosion_2.jpg",
      "name":"Corrosion"
    },
    {
      "id":3,
      "path":"./assets/Corrosion/Corrosion_3.jpg",
      "name":"Corrosion"
    },
    {
      "id":4,
      "path":"./assets/Corrosion/Corrosion_4.jpg",
      "name":"Corrosion"
    },
    {
      "id":5,
      "path":"./assets/Corrosion/Corrosion_5.jpg",
      "name":"Corrosion"
    }
  ];
  filterdata = [];

  response : any = {
    "Category": "",
    "Probability": ""
}

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.filterdata = this.imagesList;
  }

  selectproduct(product){
    this.filterdata = this.imagesList;
  }

  selectimage(i){
    this.selImgInd = i;
    this.selImgObj = this.filterdata[i];

    this.processing = true;
    this.uploads = true;
    this.processing = true;
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
    let lastSlashIdx = this.selImgObj.path.lastIndexOf("/");
    let lastDotIdx = this.selImgObj.path.lastIndexOf(".");
    let filename = this.selImgObj.path.substring(lastSlashIdx + 1, lastDotIdx);
    this.apiService.checkCounterfeit({filename: filename}).then(result => {
      if( result && result["Category"] && result["Probability"] ) {
        let prob = result["Probability"];
        this.response = {
          Category: result["Category"],
          Probability: (prob * 100).toFixed(2)
        }
      } else {
        this.response = {
          Category: "",
          Probability: ""
        }
      }
    });
    this.uploadedimage = this.selImgObj.path;

    // this.apiService.getPosReportData({}).then(result => {
    //   debugger;
    // });

  }

}
