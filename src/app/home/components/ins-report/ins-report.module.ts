import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsReportRoutingModule } from './ins-report-routing.module';
import { InsReportComponent } from './ins-report.component';

@NgModule({
  declarations: [
    InsReportComponent
  ],
  imports: [
    CommonModule,
    InsReportRoutingModule
  ]
})
export class InsReportModule { }
