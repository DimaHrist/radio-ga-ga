import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import {MatIconModule} from '@angular/material/icon';
import {CarouselModule} from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    CarouselModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [RadioComponent],
  exports: [RadioComponent]
})
export class RadioModule { }
