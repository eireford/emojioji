import { Injectable, NgModule } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Upload } from '@app/upload/upload.component';

@Injectable()
export class FirestoreStub {
  private readonly uploadsCollection: AngularFirestoreCollection<Upload>;

  collection(someString: string) {
    return { one: 1, two: 2}
  }
}

@NgModule({
  providers: [{provide: AngularFirestore, useClass: FirestoreStub}]
})
export class AngularFirestoreModuleStub {}
