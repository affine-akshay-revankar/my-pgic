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
productlist:any=[];
videoData:any=[];
timestamp:any[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // var vid1 = <HTMLVideoElement>document.getElementById("myVideo1");
    // var vid2 = <HTMLVideoElement>document.getElementById("myVideo2");
    // vid1.autoplay = true;
    // vid2.autoplay = true;
    // var name=<HTMLVideoElement>document.getElementById('myVideo1')
    // name.play();
    // var name1=<HTMLVideoElement>document.getElementById('myVideo2');
    // name1.play();
    this.apiService.getShelfInventoryData().then(result => {
    var data=[
        {
            "timestamps": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                16,
                18,
                20,
                22,
                24,
                26,
                28
            ],
            "data": [
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 3
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 0
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 3
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 0
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 3
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 0
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 2
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 3
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 0
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 3
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 0
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 3
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 1
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 4
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 4
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 0
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 4
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 0
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 4
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 4
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ],
                [
                    {
                        "product": "Dixan Liquid Det.",
                        "count": 2
                    },
                    {
                        "product": "Dash Liquid Det.",
                        "count": 6
                    },
                    {
                        "product": "Dixan Powder Det.",
                        "count": 3
                    },
                    {
                        "product": "Ace Powder Det.",
                        "count": 0
                    },
                    {
                        "product": "Perlana Powder Det.(1)",
                        "count": 4
                    },
                    {
                        "product": "Perlana Powder Det.(2)",
                        "count": 0
                    },
                    {
                        "product": "Perlana Liquid Det.",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Purple)",
                        "count": 3
                    },
                    {
                        "product": "Vernel Softner (Blue)",
                        "count": 0
                    }
                ]
            ]
        }
    ]
      // var data=[{"product": "cola", "counts": [4, 3, 3, 2, 2], "timestamps": [2, 4, 6, 8, 10]}, {"product": "maggi", "counts": [4, 3, 3, 2, 2], "timestamps": [2, 4, 6, 8, 10]}]
console.log(data);
console.log(data[0].data);
      var res=[];
      var i=0;
      // res1 = data[0].data[i].map(a => a.count);
    this.productlist=  data[0].data[0].map(a => a.product);
      console.log(this.productlist);
      this.timestamp=data[0].timestamps;
// for (i=0;i< data[0].data.length;i++){
//   var profuctslist= data[0].data[i].map(a => a.count);
//
// }

      var interval = setInterval(() => {
      res = data[0].data[i].map(a => a.count);
      console.log(res);
       // this.array2["T"+(i+1)]= res1;
       this.videoData.push([{ Time:this.timestamp[i], a:res[0],b:res[1],c :res[2],d:res[3],e:res[4],f:res[5], g: res[6],h:res[7], i: res[8]}]);

       // this.array2["T"+(i+1)].slice();
       console.log(this.videoData);
        i +=1;
        if (i>= 28) {
          clearInterval(interval);
        }}, 2000 );



});

  }

}
