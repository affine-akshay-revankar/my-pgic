import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { InsReportRoutingModule } from './ins-report-routing.module';
import { InsReportComponent } from './ins-report.component';
// import { DataTableModule } from "angular2-datatable";
// import { Observable } from 'rxjs/Observable';
// import { SharedPipesModule  } from '../../../shared';


@NgModule({
  declarations: [
    InsReportComponent
  ],
  imports: [
    CommonModule,
    InsReportRoutingModule,
    FormsModule,

    // SharedPipesModule
  ],

})
export class InsReportModule { }
