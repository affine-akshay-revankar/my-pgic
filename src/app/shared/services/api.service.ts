import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  baseURL: string = 'http://127.0.0.1:5000';
  private httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  checkCounterfeit(data){
    let params = new HttpParams();
    params = params.append('filename', data.filename);
    return this.httpClient.get(
      `${this.baseURL}/api/checkCounterfeit`,
      { params: params }
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getPosReportData(data){
    let params = new HttpParams();
    params = params.append('filename', 'Tide_1');
    return this.httpClient.get(
      `${this.baseURL}/api/checkCounterfeit`,
      { params: params }
    )
    .toPromise()
    .then(response => {
      let result = {
        "Data": [
          {
            "Av Customer Spend": 211.63412127440904,
            "City": "Bangalore",
            "Customers": 973,
            "Date": "2020-05-01",
            "Product": "Tide",
            "Revenue": 205920,
            "Segment": "Fabric Care",
            "State": "Karnataka",
            "Transaction": 973,
            "Units Sold": 1716
          },
          {
            "Av Customer Spend": 278.683314415437,
            "City": "Bangalore",
            "Customers": 881,
            "Date": "2020-05-02",
            "Product": "Tide",
            "Revenue": 245520,
            "Segment": "Fabric Care",
            "State": "Karnataka",
            "Transaction": 881,
            "Units Sold": 2046
          },
          {
            "Av Customer Spend": 220.3713527851459,
            "City": "Bangalore",
            "Customers": 1131,
            "Date": "2020-05-03",
            "Product": "Tide",
            "Revenue": 249240,
            "Segment": "Fabric Care",
            "State": "Karnataka",
            "Transaction": 1131,
            "Units Sold": 2077
          },
          {
            "Av Customer Spend": 220.62283737024222,
            "City": "Bangalore",
            "Customers": 867,
            "Date": "2020-05-04",
            "Product": "Tide",
            "Revenue": 191280,
            "Segment": "Fabric Care",
            "State": "Karnataka",
            "Transaction": 867,
            "Units Sold": 1594
          },
          {
            "Av Customer Spend": 231.47540983606558,
            "City": "Bangalore",
            "Customers": 1098,
            "Date": "2020-05-05",
            "Product": "Tide",
            "Revenue": 254160,
            "Segment": "Fabric Care",
            "State": "Karnataka",
            "Transaction": 1098,
            "Units Sold": 2118
          }
        ],
        "bottomFour_ByRevenue": [
          {
            "Product": "Tide",
            "Revenue": 249240,
            "Share Percent": 21.75
          },
          {
            "Product": "Tide",
            "Revenue": 245520,
            "Share Percent": 21.42
          },
          {
            "Product": "Tide",
            "Revenue": 205920,
            "Share Percent": 17.97
          },
          {
            "Product": "Tide",
            "Revenue": 191280,
            "Share Percent": 16.69
          }
        ],
        "bottomFour_ByUnitsSold": [
          {
            "Product": "Tide",
            "Share Percent": 21.75,
            "Units Sold": 2077
          },
          {
            "Product": "Tide",
            "Share Percent": 21.42,
            "Units Sold": 2046
          },
          {
            "Product": "Tide",
            "Share Percent": 17.97,
            "Units Sold": 1716
          },
          {
            "Product": "Tide",
            "Share Percent": 16.69,
            "Units Sold": 1594
          }
        ],
        "topFour_ByAvgCusSpends": [
          {
            "Av Customer Spend": 278.683314415437,
            "Product": "Tide",
            "Share Percent": 21.42
          },
          {
            "Av Customer Spend": 231.47540983606558,
            "Product": "Tide",
            "Share Percent": 22.18
          },
          {
            "Av Customer Spend": 220.62283737024222,
            "Product": "Tide",
            "Share Percent": 16.69
          },
          {
            "Av Customer Spend": 220.3713527851459,
            "Product": "Tide",
            "Share Percent": 21.75
          }
        ],
        "topFour_ByCustomers": [
          {
            "Customers": 1131,
            "Product": "Tide",
            "Share Percent": 21.75
          },
          {
            "Customers": 1098,
            "Product": "Tide",
            "Share Percent": 22.18
          },
          {
            "Customers": 973,
            "Product": "Tide",
            "Share Percent": 17.97
          },
          {
            "Customers": 881,
            "Product": "Tide",
            "Share Percent": 21.42
          }
        ],
        "topFour_ByRevenue": [
          {
            "Product": "Tide",
            "Revenue": 254160,
            "Share Percent": 22.18
          },
          {
            "Product": "Tide",
            "Revenue": 249240,
            "Share Percent": 21.75
          },
          {
            "Product": "Tide",
            "Revenue": 245520,
            "Share Percent": 21.42
          },
          {
            "Product": "Tide",
            "Revenue": 205920,
            "Share Percent": 17.97
          }
        ],
        "topFour_ByTransaction": [
          {
            "Product": "Tide",
            "Share Percent": 21.75,
            "Transaction": 1131
          },
          {
            "Product": "Tide",
            "Share Percent": 22.18,
            "Transaction": 1098
          },
          {
            "Product": "Tide",
            "Share Percent": 17.97,
            "Transaction": 973
          },
          {
            "Product": "Tide",
            "Share Percent": 21.42,
            "Transaction": 881
          }
        ],
        "topFour_ByUnitsSold": [
          {
            "Product": "Tide",
            "Share Percent": 22.18,
            "Units Sold": 2118
          },
          {
            "Product": "Tide",
            "Share Percent": 21.75,
            "Units Sold": 2077
          },
          {
            "Product": "Tide",
            "Share Percent": 21.42,
            "Units Sold": 2046
          },
          {
            "Product": "Tide",
            "Share Percent": 17.97,
            "Units Sold": 1716
          }
        ],
        "totalAvgCustomerSpend": 232.55740713625997,
        "totalRevenue": 1146120,
        "totalTransaction": 4950,
        "totalUnitsSold": 9551
      };
      return result;
      // return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getStoreTrafficData(){
    return this.httpClient.get(
      `${this.baseURL}/api/getTrafficSummary`
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  detectCorrosion1(data, type){
    var url = 'http://fr-api.affineanalytics.co.in:5001/analysenew';

    return this.httpClient.post(
      url,
      data,
      this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  detectCorrosion2(file: File) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      var d = new Date().getTime();
      formData.append("pic", file);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", 'http://fr-api.affineanalytics.co.in:5001/analyse', true);
      xhr.send(formData);
    });
  }

  detectDamage1(data, type){
    var url = 'http://fr-api.affineanalytics.co.in:5002/analysenew';

    return this.httpClient.post(
      url,
      data,
      this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  detectDamage2(file: File) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      var d = new Date().getTime();
      formData.append("pic", file);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", 'http://fr-api.affineanalytics.co.in:5002/analyse', true);
      xhr.send(formData);
    });
  }

}
