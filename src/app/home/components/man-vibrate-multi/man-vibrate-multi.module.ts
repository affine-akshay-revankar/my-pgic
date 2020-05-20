import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManVibrateMultiRoutingModule } from './man-vibrate-multi-routing.module';
import { ManVibrateMultiComponent } from './man-vibrate-multi.component';


@NgModule({
  declarations: [ManVibrateMultiComponent],
  imports: [
    CommonModule,
    ManVibrateMultiRoutingModule
  ]
})
export class ManVibrateMultiModule { }
