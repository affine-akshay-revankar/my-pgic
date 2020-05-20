import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';
// import { IntroComponent }   from './components/intro/intro.component';
import { InstoreComponent }   from './components/instore/instore.component';
import { InsTrafficComponent } from './components/ins-traffic/ins-traffic.component';
import { InsPosComponent }   from './components/ins-pos/ins-pos.component';
import { InsCounterfeitComponent }   from './components/ins-counterfeit/ins-counterfeit.component';
import { InsReportComponent } from './components/ins-report/ins-report.component';
import { ManVibrateComponent } from './components/man-vibrate/man-vibrate.component';
import { ManVibrateMultiComponent } from './components/man-vibrate-multi/man-vibrate-multi.component';


const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: '', component: HomeComponent,
    children: [
      { path: 'intro', loadChildren: () => import('./components/intro/intro.module').then(m => m.IntroModule) },

      { path: 'instore', loadChildren: () => import('./components/instore/instore.module').then(m => m.InstoreModule) },
      { path: 'ins-traffic', loadChildren: () => import('./components/ins-traffic/ins-traffic.module').then(m => m.InsTrafficModule) },
      { path: 'ins-pos', loadChildren: () => import('./components/ins-pos/ins-pos.module').then(m => m.InsPosModule) },
      { path: 'ins-counterfeit', loadChildren: () => import('./components/ins-counterfeit/ins-counterfeit.module').then(m => m.InsCounterfeitModule) },
      { path: 'ins-report', loadChildren: () => import('./components/ins-report/ins-report.module').then(m => m.InsReportModule) },
      { path: 'ins-shelf', loadChildren: () => import('./components/ins-shelf/ins-shelf.module').then(m => m.InsShelfModule) },

      { path: 'manufacture', loadChildren: () => import('./components/manufacture/manufacture.module').then(m => m.ManufactureModule) },
      { path: 'man-corrosion', loadChildren: () => import('./components/man-corrosion/man-corrosion.module').then(m => m.ManCorrosionModule) },
      { path: 'man-damage', loadChildren: () => import('./components/man-damage/man-damage.module').then(m => m.ManDamageModule) },
      { path: 'man-vibrate', loadChildren: () => import('./components/man-vibrate/man-vibrate.module').then(m => m.ManVibrateModule) },
      { path: 'man-vibrate-multi', loadChildren: () => import('./components/man-vibrate-multi/man-vibrate-multi.module').then(m => m.ManVibrateMultiModule) },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
