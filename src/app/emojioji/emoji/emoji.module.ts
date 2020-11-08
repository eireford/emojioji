import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmojiRoutingModule} from './emoji-routing.module';
import {EmojiDetailComponent} from './emoji-detail/emoji-detail.component';
import {EmojiComponent} from './emoji/emoji.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ EmojiDetailComponent, EmojiComponent],
  exports: [
    EmojiComponent
  ],
  imports: [
    CommonModule,
    EmojiRoutingModule,
    FormsModule
  ]
})
export class EmojiModule {
}
