import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManexcComponent } from './manexc.component';
import { ManexcRoutingModule } from './manexc-routing.module';


@NgModule({
  declarations: [
    ManexcComponent
  ],
  imports: [
    CommonModule,
    ManexcRoutingModule
  ]
})
export class ManexcModule { }
