import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';
import { ResumeComponent } from './components/resume/resume.component';
import { LicenseComponent } from './components/license/license.component';

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
    LicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
