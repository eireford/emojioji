import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Upload  } from '@app/upload/upload.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { logger } from 'codelyzer/util/logger';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  uploadsObservable: Observable<Upload[]>;
  uploads: Upload[] = [];
  uploadURLs: string[] = [];
  collectionName = 'uploads';

  // Previous uploads
  private readonly uploadsCollection: AngularFirestoreCollection<Upload>;

  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) {
    this.uploadsCollection = firestore.collection<Upload>(this.collectionName);
    console.log('uploads collection');
    console.log(this.uploadsCollection);
    this.uploadsObservable = this.uploadsCollection.valueChanges();
    this.uploadsObservable.subscribe((uploadArray) => {
      console.log('mark 12');
      console.log(this.uploads.length);
      this.uploads = uploadArray;
    });
    console.log('mark 2');
  }

  ngOnInit(): void {}

  addUploaded(upload: Upload) {
    this.uploadsCollection?.add(upload).then(r => logger.debug('addUploaded'));
  }

  public downloadURL(uploadPath: string) {
    const ref = this.storage.ref(uploadPath);
    const observableOfString = ref.getDownloadURL();
    let url = '';
    observableOfString.subscribe((u) => (url = u));
    return url;
  }
}
