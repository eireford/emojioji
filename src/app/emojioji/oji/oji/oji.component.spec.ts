import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OjiComponent } from './oji.component';

describe('OjiComponent', () => {
  let component: OjiComponent;
  let fixture: ComponentFixture<OjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OjiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
