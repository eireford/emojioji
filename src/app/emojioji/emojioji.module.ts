import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiojiRoutingModule } from './emojioji-routing.module';
import { EmojiModule } from './emoji/emoji.module';
import { OjiModule } from './oji/oji.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmojiojiRoutingModule,
    EmojiModule,
    OjiModule
  ]
})
export class EmojiojiModule { }
