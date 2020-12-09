import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './drop-zone.directive';
import { UploadComponent } from '@app/upload/upload.component';
import { UploadRoutingModule } from '@app/upload/upload-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [UploadComponent,DropZoneDirective],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatIconModule
  ]
})
export class UploadModule { }
