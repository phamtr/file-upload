import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { MessageService }       from './message.service';
import { DownloadModule } from './download/download.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UploadModule, DownloadModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}