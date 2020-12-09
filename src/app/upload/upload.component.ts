import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';

export interface Upload {
  path: string;
  size: number;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  // Firestore collection that holds uploads
  static readonly collectionName = 'uploads';

  // Main task
  task: AngularFireUploadTask | undefined;

  // Progress monitoring
  percentage: Observable<number | undefined> | undefined;

  snapshot: Observable<UploadTaskSnapshot | undefined> | undefined;

  // Download URL
  downloadURL: Observable<string> | undefined;

  // State for dropzone CSS toggling
  isHovering: boolean | undefined;

  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: Event) {
    console.log('mark startupload');

    if (!event || !(event instanceof DragEvent) || !event.dataTransfer || !event.dataTransfer.files) return;
    // The File object
    const file = event.dataTransfer.files.item(0);

    if (!file) {
      console.log('Invalid file in upload.');
      return;
    }
    // Client-side validation example
    if (!file || file.type.split('/')[0] !== 'image') {
      console.log('uploaded file is not an image');
    }

    // The storage path
    const path = `${UploadComponent.collectionName}/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);

    // Totally optional metadata
    const customMetadata = { app: 'emojioji' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      // The file's download URL
      finalize(() => (this.downloadURL = fileRef.getDownloadURL())),
      tap((snap) => {
        console.log(snap);
        if (snap && snap.bytesTransferred === snap.totalBytes) {
          console.log('Update Firestore');
          console.log(this.firestore);

          const upload: Upload = { path, size: snap.totalBytes };
          // Update firestore on completion
          this.firestore
            .collection(UploadComponent.collectionName)
            .add(upload)
            .then((r) => console.log(r))
            .catch((error) => {
              console.log('Firestore update failed.');
              console.error(error);
            });
        }
      })
    );
  }

  // Determines if the upload task is active
  isActive(snapshot: { state: string; bytesTransferred: number; totalBytes: number }) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
