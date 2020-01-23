import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { CarouselComponent, CarouselItemElement } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { DevDiagramComponent } from './components/dev-diagram/dev-diagram.component';
import { SysDiagramComponent } from './components/sys-diagram/sys-diagram.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LicenseComponent } from './components/license/license.component';
import { ContactComponent } from './components/contact/contact.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { GoogleMapsModule } from 'google-maps-module';

import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
//import { HousingComponent } from './components/housing/housing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DiagramComponent,
    CarouselComponent,
    CarouselItemElement,
    CarouselItemDirective,
    DevDiagramComponent,
    SysDiagramComponent,
    HomeComponent,
    ResumeComponent,
    LicenseComponent,
    ContactComponent
    //HousingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
    //GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
