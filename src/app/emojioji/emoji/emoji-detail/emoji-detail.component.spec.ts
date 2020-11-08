import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiDetailComponent } from './emoji-detail.component';

describe('EmojiDetailComponent', () => {
  let component: EmojiDetailComponent;
  let fixture: ComponentFixture<EmojiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
