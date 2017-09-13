import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesService } from './services/galleries.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
      HttpClientModule
  ], providers: [
        GalleriesService
    ],
  declarations: [

  ]
})
export class SharedModule { }
