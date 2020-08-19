import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdTipsComponent } from './td-tips.component';



@NgModule({
  declarations: [TdTipsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TdTipsComponent
  ]
})
export class TdTipsModule { }
