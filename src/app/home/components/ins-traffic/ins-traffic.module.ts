import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsTrafficRoutingModule } from './ins-traffic-routing.module';
import { InsTrafficComponent } from './ins-traffic.component';


@NgModule({
  declarations: [
    InsTrafficComponent
  ],
  imports: [
    CommonModule,
    InsTrafficRoutingModule
  ]
})
export class InsTrafficModule { }
