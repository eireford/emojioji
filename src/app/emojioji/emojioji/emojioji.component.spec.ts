import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiojiComponent } from './emojioji.component';

describe('EmojiojiComponent', () => {
  let component: EmojiojiComponent;
  let fixture: ComponentFixture<EmojiojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
