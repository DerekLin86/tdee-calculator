import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollMoveDirective } from './scroll-move.directive';

@NgModule({
  declarations: [
    ScrollMoveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollMoveDirective
  ],
  providers: [
    ScrollMoveDirective
  ]
})
export class ScrollMoveModule { }
