import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageComponent } from './storage.component';
import { AngularFirestoreModuleStub } from '../../../test/AngularFirestoreModuleStub';
import { AngularFireStorageModuleStub } from '../../../test/AngularFireStorageModuleStub';
import { GetDownloadURLPipeModule } from '@angular/fire/storage';

describe('StorageComponent', () => {
  let component: StorageComponent;
  let fixture: ComponentFixture<StorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireStorageModuleStub,
        AngularFirestoreModuleStub,
        GetDownloadURLPipeModule],
      declarations: [StorageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
