import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsShelfRoutingModule } from './ins-shelf-routing.module';
import { InsShelfComponent } from './ins-shelf.component';


@NgModule({
  declarations: [InsShelfComponent],
  imports: [
    CommonModule,
    InsShelfRoutingModule
  ]
})
export class InsShelfModule { }
