import { Component, OnInit } from '@angular/core';
import {EmojiService} from '../../emoji.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Emoji} from '../emoji';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {
  selectedId: number | undefined;
  emojis$: Observable<Emoji[]> | undefined;

  constructor(
    private service: EmojiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.emojis$ = this.route.paramMap.pipe(
      switchMap( params => {
        const idOrNull: string | null = params.get('id');
        const id: number = idOrNull ? +idOrNull : NaN;
        this.selectedId = !isNaN(id) ? id : undefined;
        return this.service.getEmojis();
      })
    );
  }

}
