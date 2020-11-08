import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Emoji} from '../emoji';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmojiService} from '../../emoji.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-emoji-detail',
  templateUrl: './emoji-detail.component.html',
  styleUrls: ['./emoji-detail.component.css']
})
export class EmojiDetailComponent implements OnInit {
  emoji$: Observable<Emoji> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmojiService
  ) {
  }

  ngOnInit(): void {
    const emojiOrNull = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmoji(params.get('id') ?? 0)
      )
    );
  }

  gotoEmojis(emoji: Emoji): void {
    const emojiId = emoji ? emoji.id : null;
    this.router.navigate(['/emojis', {id: emojiId}]).then();
  }
}
