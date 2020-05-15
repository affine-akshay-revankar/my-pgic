import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';
// import { IntroComponent }   from './components/intro/intro.component';
import { InstoreComponent }   from './components/instore/instore.component';
import { InsTrafficComponent } from './components/ins-traffic/ins-traffic.component';
import { InsPosComponent }   from './components/ins-pos/ins-pos.component';
import { InsCounterfeitComponent }   from './components/ins-counterfeit/ins-counterfeit.component';
import { InsReportComponent } from './components/ins-report/ins-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: '', component: HomeComponent,
    children: [
      // { path: 'intro', component: IntroComponent },
      { path: 'intro', loadChildren: () => import('./components/intro/intro.module').then(m => m.IntroModule) },
      { path: 'instore', component: InstoreComponent },
      { path: 'ins-traffic', component: InsTrafficComponent },
      { path: 'ins-pos', component: InsPosComponent },
      { path: 'ins-counterfeit', component: InsCounterfeitComponent },
      { path: 'ins-report', component: InsReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
