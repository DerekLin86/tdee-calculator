import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPathPipe } from './static-path.pipe';



@NgModule({
  declarations: [
    StaticPathPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaticPathPipe
  ]
})
export class StaticPathModule { }
