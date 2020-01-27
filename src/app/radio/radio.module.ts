import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import {MatIconModule} from '@angular/material/icon';
import {CarouselModule} from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    CarouselModule,
    HttpClientModule,
  ],
  declarations: [RadioComponent],
  exports: [RadioComponent]
})
export class RadioModule { }
