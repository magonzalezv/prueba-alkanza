import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        LineService,
        PoemService,
        UtilsService
       } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LineService,
    PoemService,
    UtilsService
  ]
})
export class ServiceModule { }
