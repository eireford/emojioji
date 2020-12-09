import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageRoutingModule } from './storage-routing.module';
import { StorageComponent } from '@app/storage/storage.component';
import { GetDownloadURLPipeModule } from '@angular/fire/storage';

@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    StorageRoutingModule,
    GetDownloadURLPipeModule
  ]
})
export class StorageModule { }
