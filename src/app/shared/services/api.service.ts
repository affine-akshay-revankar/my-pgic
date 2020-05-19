import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  baseURL: string = 'http://127.0.0.1:5000';

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

  getEstimatedPos(data){
    console.log(data);
    let params = new HttpParams();
    params = params.append('filename', data.filename);
    console.log(params);
    return this.httpClient.get(
      `${this.baseURL}/api/getEstimatedPos`,
      { params: params }
    )
    .toPromise()
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }


  getPosReportData(data){
    console.log(data);
    let params = new HttpParams();
    params = params.append('from',data.from);
    params = params.append('to',data.to);
    params = params.append('state',data.state);
    params = params.append('city',data.city);
    params = params.append('product',data.product);
    // params= params.append(data)
    return this.httpClient.get(
      `${this.baseURL}/api/getPosReportData`,
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
  //
  // checkCounterfeit(data){
  //   let params = new HttpParams();
  //   params = params.append('filename', data.filename);
  //   return this.httpClient.get(
  //     `${this.baseURL}/api/checkCounterfeit`,
  //     { params: params }
  //   )
  //   .toPromise()
  //   .then(response => {
  //     return response;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

}
