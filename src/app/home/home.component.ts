import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  uploadPercent: Observable<number | undefined> | undefined;
  downloadURL: Observable<string> | undefined;
  constructor(private quoteService: QuoteService, private storage: AngularFireStorage) {}
  uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = 'homeupload';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe();
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
