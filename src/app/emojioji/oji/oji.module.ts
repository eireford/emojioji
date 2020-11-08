import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OjiRoutingModule} from './oji-routing.module';
import {OjiComponent} from './oji/oji.component';
import {OjiDetailComponent} from './oji-detail/oji-detail.component';


@NgModule({
  declarations: [OjiComponent, OjiDetailComponent],
  exports: [
    OjiComponent
  ],
  imports: [
    CommonModule,
    OjiRoutingModule
  ]
})
export class OjiModule {
}
