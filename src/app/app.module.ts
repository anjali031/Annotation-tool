import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnotationToolComponent } from './annotation-tool/annotation-tool.component';
import {CookieService} from 'ngx-cookie-service';
import { AnnotationToolService } from './shared/annotation-tool.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnnotationToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CookieService, AnnotationToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
