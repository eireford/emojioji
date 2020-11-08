import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmojiDetailComponent} from './emoji-detail/emoji-detail.component';
import {EmojiComponent} from './emoji/emoji.component';

const routes: Routes = [
  {path: '', component: EmojiComponent},
  {path: 'emoji-detail/:id', component: EmojiDetailComponent},
  {path: 'e/:id', component: EmojiDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmojiRoutingModule {
}
