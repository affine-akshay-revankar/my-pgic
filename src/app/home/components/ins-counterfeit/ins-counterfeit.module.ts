import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsCounterfeitRoutingModule } from './ins-counterfeit-routing.module';
import { InsCounterfeitComponent } from './ins-counterfeit.component';

@NgModule({
  declarations: [
    InsCounterfeitComponent
  ],
  imports: [
    CommonModule,
    InsCounterfeitRoutingModule
  ]
})
export class InsCounterfeitModule { }
