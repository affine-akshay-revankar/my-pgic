import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { InstoreComponent } from './instore/instore.component';
import { InsCounterfeitComponent } from './ins-counterfeit/ins-counterfeit.component';
import { InsTrafficComponent } from './ins-traffic/ins-traffic.component';
import { InsPosComponent } from './ins-pos/ins-pos.component';
import { InsReportComponent } from './ins-report/ins-report.component';
import { InsStoredTrafficComponent } from './ins-stored-traffic/ins-stored-traffic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    InstoreComponent,
    InsCounterfeitComponent,
    InsTrafficComponent,
    InsPosComponent,
    InsReportComponent,
    InsStoredTrafficComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
