import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsPosRoutingModule } from './ins-pos-routing.module';
import { InsPosComponent } from './ins-pos.component';

@NgModule({
  declarations: [
    InsPosComponent
  ],
  imports: [
    CommonModule,
    InsPosRoutingModule
  ]
})
export class InsPosModule { }
