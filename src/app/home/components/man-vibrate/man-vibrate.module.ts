import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManVibrateRoutingModule } from './man-vibrate-routing.module';
import { ManVibrateComponent } from './man-vibrate.component';


@NgModule({
  declarations: [
    ManVibrateComponent
  ],
  imports: [
    CommonModule,
    ManVibrateRoutingModule
  ]
})
export class ManVibrateModule { }
