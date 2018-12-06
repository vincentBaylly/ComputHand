import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { CarouselComponent, CarouselItemElement } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DiagramComponent,
    CarouselComponent,
    CarouselItemElement,
    CarouselItemDirective
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
