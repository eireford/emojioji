import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OjiDetailComponent} from './oji-detail/oji-detail.component';
import {OjiComponent} from './oji/oji.component';

const routes: Routes = [
  {path: 'oji', component: OjiComponent  },
  {path: 'oji-detail/:x/:y', component: OjiDetailComponent},
  {path: 'o/:x/:y', component: OjiDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OjiRoutingModule { }
