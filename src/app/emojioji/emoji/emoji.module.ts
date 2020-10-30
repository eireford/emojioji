import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiRoutingModule } from './emoji-routing.module';
import { EmojiListComponent } from './emoji-list/emoji-list.component';


@NgModule({
  declarations: [EmojiListComponent],
  imports: [
    CommonModule,
    EmojiRoutingModule
  ]
})
export class EmojiModule { }
