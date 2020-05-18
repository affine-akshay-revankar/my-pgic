import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

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

  selImgInd: number = -1;
  selImgObj: any;

  product = [
    {id:1,name:"Tide"},
    {id:1,name:"Head & Shoulders"},
  ];

  imagesList = [
    {
      "id":1,
      "path":"./assets/Tide/Tide_1.png",
      "name":"Tide"
    },
    {
      "id":2,
      "path":"./assets/Tide/Tide_2.jpg",
      "name":"Tide"
    },
    {
      "id":3,
      "path":"./assets/Tide/Tide_3.jpg",
      "name":"Tide"
    },
    {
      "id":4,
      "path":"./assets/Tide/Tide_4.png",
      "name":"Tide"
    },
    {
      "id":5,
      "path":"./assets/Tide/Tide_5.png",
      "name":"Tide"
    },
    {
      "id":6,
      "path":"./assets/Tide/Tide_6.jpg",
      "name":"Tide"
    },
    {
      "id":7,
      "path":"./assets/Tide/Tide_7.PNG",
      "name":"Tide"
    },
    {
      "id":8,
      "path":"./assets/Head_N_Sholder/HS_1.jpg",
      "name":"Head & Shoulders"
    },
    {
      "id":9,
      "path":"./assets/Head_N_Sholder/HS_2.jpg",
      "name":"Head & Shoulders"
    },
    {
      "id":10,
      "path":"./assets/Head_N_Sholder/HS_3.jpg",
      "name":"Head & Shoulders"
    },
    {
      "id":11,
      "path":"./assets/Head_N_Sholder/HS_4.jpg",
      "name":"Head & Shoulders"
    },
    {
      "id":12,
      "path":"./assets/Head_N_Sholder/HS_5.jpg",
      "name":"Head & Shoulders"
    },
    {
      "id":13,
      "path":"./assets/Head_N_Sholder/HS_6.jpeg",
      "name":"Head & Shoulders"
    },
    {
      "id":14,
      "path":"./assets/Head_N_Sholder/HS_7.jpeg",
      "name":"Head & Shoulders"
    },
    {
      "id":15,
      "path":"./assets/Head_N_Sholder/HS_8.jpg",
      "name":"Head & Shoulders"
    },
    {
      "id":16,
      "path":"./assets/Head_N_Sholder/HS_9.jpg",
      "name":"Head & Shoulders"
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
  }

  selectproduct(product){
    this.filterdata = this.imagesList.filter(function(obj) {
      return obj.name === product;
    });
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
      result.Probability = (result?.Probability * 100).toFixed(2);
      this.response = result;
    });
    this.uploadedimage = this.selImgObj.path;

    // this.apiService.getPosReportData({}).then(result => {
    //   debugger;
    // });

  }

}
