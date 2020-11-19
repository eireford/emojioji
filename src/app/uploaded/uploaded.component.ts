import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Upload, UploadComponent } from '@app/upload/upload.component';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.scss'],
})
export class UploadedComponent implements OnInit {
  // Previously uploaded
  uploadsObservable: Observable<Upload[]>;
  uploads: Upload[] = [];
  uploadURLs: string[] = [];

  // Previous uploads
  private uploadsCollection: AngularFirestoreCollection<Upload> | undefined;

  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) {
    this.uploadsCollection = firestore.collection<Upload>(UploadComponent.collectionName);
    this.uploadsObservable = this.uploadsCollection.valueChanges();
    this.uploadsObservable.subscribe((uploadArray) => {
      console.log('mark 1');
      console.log(this.uploads.length);
      this.uploads = uploadArray;
    });
    console.log('mark 2');
  }

  ngOnInit(): void {}

  addUploaded(upload: Upload) {
    this.uploadsCollection?.add(upload);
  }

  public downloadURL(uploadPath: string) {
    const ref = this.storage.ref(uploadPath);
    const observableOfString = ref.getDownloadURL();
    let url = '';
    observableOfString.subscribe((u) => (url = u));
    return url;
  }
}
