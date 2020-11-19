import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedComponent } from '@app/uploaded/uploaded.component';
import { GetDownloadURLPipeModule } from '@angular/fire/storage';

@NgModule({
  declarations: [UploadedComponent],
  exports: [UploadedComponent],
  imports: [CommonModule, GetDownloadURLPipeModule],
})
export class UploadedModule {}
