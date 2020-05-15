import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AuthGuard, Globals } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbedVideo } from 'ngx-embed-video';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmbedVideo.forRoot(),
    ChartModule,
    CommonModule
  ],
  exports: [

  ],
  providers: [
    AuthGuard,
    Globals,
    HttpClient,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
