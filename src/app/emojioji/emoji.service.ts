import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Injectable} from '@angular/core';
import {Emoji} from './emoji/emoji';
import {EMOJIS} from './emoji/mock-emojis';


@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  static nextEmojiId = 1000;
  private emojis$: BehaviorSubject<Emoji[]> = new BehaviorSubject<Emoji[]>(EMOJIS);

  constructor() {
  }

  getEmojis(): Observable<Emoji[]> {
    return of(EMOJIS);
  }

  getEmoji(id: number | string): Observable<Emoji | undefined> {
    return this.getEmojis().pipe(
      map((emojis: Emoji[]) => emojis.find(emoji => emoji.id === +id))
    );
  }

  addEmoji(name: string): void {
    name = name.trim();
    if (name) {
      const emoji = { id: EmojiService.nextEmojiId++, name};
      EMOJIS.push(emoji);
      this.emojis$.next(EMOJIS);
    }
  }
}
