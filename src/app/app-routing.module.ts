import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent }   from './intro/intro.component';
import { InstoreComponent }   from './instore/instore.component';
import { InsTrafficComponent }   from './ins-traffic/ins-traffic.component';
import { InsPosComponent }   from './ins-pos/ins-pos.component';
import { InsCounterfeitComponent }   from './ins-counterfeit/ins-counterfeit.component';
import { InsReportComponent } from './ins-report/ins-report.component';
import { InsStoredTrafficComponent } from './ins-stored-traffic/ins-stored-traffic.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'instore', component: InstoreComponent },
  { path: 'ins-traffic', component: InsTrafficComponent },
  { path: 'ins-pos', component: InsPosComponent },
  { path: 'ins-counterfeit', component: InsCounterfeitComponent },
  { path: 'ins-report', component: InsReportComponent },
  { path: 'ins-stored_traffic', component: InsStoredTrafficComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
