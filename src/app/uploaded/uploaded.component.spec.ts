import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedComponent } from './uploaded.component';

describe.skip('UploadedComponent', () => {
  let component: UploadedComponent;
  let fixture: ComponentFixture<UploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
