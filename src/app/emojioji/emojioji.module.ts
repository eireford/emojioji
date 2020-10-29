import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiojiRoutingModule } from './emojioji-routing.module';
import { EmojiModule } from './emoji/emoji.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmojiojiRoutingModule,
    EmojiModule
  ]
})
export class EmojiojiModule { }
