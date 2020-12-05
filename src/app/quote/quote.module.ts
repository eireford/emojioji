import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from '@app/home/home-routing.module';



@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class QuoteModule { }
