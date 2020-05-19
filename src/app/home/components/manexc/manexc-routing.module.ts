import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManexcComponent } from './manexc.component';

const routes: Routes = [{
  path: '',
  component: ManexcComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManexcRoutingModule { }
