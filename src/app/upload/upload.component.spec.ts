import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { MatIconModule } from '@angular/material/icon';
import { AngularFirestoreModuleStub } from '../../../test/AngularFirestoreModuleStub'
import { AngularFireStorageModuleStub } from '../../../test/AngularFireStorageModuleStub';


describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadComponent ],
      imports: [MatIconModule, AngularFireStorageModuleStub, AngularFirestoreModuleStub]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
