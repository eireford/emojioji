import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmojiDetailComponent} from './emoji/emoji-detail/emoji-detail.component';
import {EmojiComponent} from './emoji/emoji/emoji.component';
import {EmojiojiComponent} from './emojioji/emojioji.component';

const routes: Routes = [
  {path: '', component: EmojiojiComponent},
  {path: 'home', component: EmojiojiComponent},
  {
    path: 'emoji', children: [
      {
        path: ':id',
        component: EmojiDetailComponent
      },
      {
        path: '',
        component: EmojiComponent
      }
    ]
  },
  {
    path: 'e', children: [
      {
        path: ':id',
        component: EmojiDetailComponent
      },
      {
        path: '',
        component: EmojiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmojiojiRoutingModule {
}
