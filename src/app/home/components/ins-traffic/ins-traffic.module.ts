import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsTrafficRoutingModule } from './ins-traffic-routing.module';
import { InsTrafficComponent } from './ins-traffic.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    InsTrafficComponent
  ],
  imports: [
    CommonModule,
    InsTrafficRoutingModule,
    ChartModule
  ]
})
export class InsTrafficModule { }
