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
  response : any = {
    Details: "",
    TransactionDate : "",
    Items:"",
    ItemCost : "",
    Total : ""
}
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
    this.apiService.getEstimatedPos({filename: filename}).then(result1 => {
      console.log(result1);
      var result= {"StoreDetails": [{"label": "MerchantName", "Description": "BIG BAZAAR (FUTURE RETAIL LTD)"}, {"label": "MerchantAddress", "Description": "GURU EMPIRES, GRAND ROAD PURI, NEAR TOWN POLICE STATION, PURI-752001"}, {"label": "MerchantPhoneNumber", "Description": "06752-252602"}], "DateTime": [{"label": "TransactionDate", "Description": "01.07.2017"}], "Items": [{"label": "ItemName1", "Description": " I CO HENLY, XL, NAVY", "ItemCost": "1049.00"}, {"label": "ItemName2", "Description": "DJ & C MNS SOCKS", "ItemCost": "99.00"}, {"label": "ItemName3", "Description": "BUF, FSTRS, 32,KHAKI", "ItemCost": "1399.00"}, {"label": "ItemName4", "Description": "FSB 1000 GV on 2500", "ItemCost": "0.01"}, {"label": "ItemName5", "Description": "SHOPPING CARRY BAG", "ItemCost": "5.00"}], "Total": [{"label": "Total"}, {"Description": "2552.01"}]}
      if( result && result["StoreDetails"] && result["DateTime"] && result["Items"] && result["Total"] ) {
          var Details= result["StoreDetails"].map(a => a.Description);
          var TransactionDate = result["DateTime"].map(a => a.Description);
          var Items= result["Items"].map(a => a.Description);
          var ItemCost = result["Items"].map(a => a.ItemCost);
          var Total = result["Total"].find(a => a.Description);
        this.response = {
           Details: Details,
           TransactionDate:TransactionDate,
           Items: Items,
           ItemCost : ItemCost,
           Total : Total.Description
        }
        console.log(this.response);

      } else {
        this.response = {
          Details: "",
          TransactionDate : "",
          Items:"",
          ItemCost : "",
          Total : ""
        }
      }
    });
    // this.uploadedimage = this.selImgObj.path;
  }

}
