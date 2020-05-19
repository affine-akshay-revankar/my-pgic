import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManCorrosionRoutingModule } from './man-corrosion-routing.module';
import { ManCorrosionComponent } from './man-corrosion.component';

@NgModule({
  declarations: [
    ManCorrosionComponent
  ],
  imports: [
    CommonModule,
    ManCorrosionRoutingModule
  ]
})
export class ManCorrosionModule { }
