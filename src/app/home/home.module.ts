import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HeaderComponent }   from './components/header/header.component';
import { FooterComponent }   from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
