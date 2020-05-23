import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared';

@Component({
  selector: 'app-ins-shelf',
  templateUrl: './ins-shelf.component.html',
  styleUrls: ['./ins-shelf.component.scss']
})
export class InsShelfComponent implements OnInit {

  allowControls = false;
  // tableHeaderTh = ['', 'T1', 'T2'];
  // tableBodyTr = ['P1', 'P2', 'P3'];
  // tableBodyTd = [[0, 1], [2, 3], [4, 5]];
  tableHeaderTh = ['Product'];
  tableBodyTr = [];
  tableBodyTd = [];
  showConfig: boolean = false;


  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getShelfInventoryData().then(result => {

      let vdata = result[0]['data'][0];
      this.tableHeaderTh.push('0s');
      this.tableBodyTr = vdata.map(o => o.product);
      this.tableBodyTd = vdata.map(o => [o.count]);

      let i = 0, intId;
      intId = setInterval(() => {
        ++i;
        vdata = result[0]['data'][i];
        if ( vdata ) {
          this.tableHeaderTh.push((i * 2) + 's');
          vdata.forEach((o, i) => {
            this.tableBodyTd[i].push(o.count);
          });
        } else {
          clearInterval(intId);
        }

      }, 2000)

    });
  }
  toggleConfig(){
    this.showConfig = !this.showConfig;
  }

}
