import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OjiDetailComponent } from './oji-detail.component';

describe('OjiDetailComponent', () => {
  let component: OjiDetailComponent;
  let fixture: ComponentFixture<OjiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OjiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OjiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
