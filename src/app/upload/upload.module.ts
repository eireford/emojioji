import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { UploadComponent } from '@app/upload/upload.component';
import { UploadRoutingModule } from '@app/upload/upload-routing.module';
import { SharedModule } from '@shared';
import { DropZoneDirective } from './drop-zone.directive';
import { UploadedModule } from '../uploaded/uploaded.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    UploadRoutingModule,
    UploadedModule,
  ],
  declarations: [UploadComponent, DropZoneDirective],
})
export class UploadModule {}
