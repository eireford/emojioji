import { Injectable, NgModule } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()
export class AngularFireStorageStub {
  collection(someString: string) {
    return { one: 1, two: 2}
  }
}

@NgModule({
  providers: [{provide: AngularFireStorage, useClass: AngularFireStorageStub}]
})
export class AngularFireStorageModuleStub {}
