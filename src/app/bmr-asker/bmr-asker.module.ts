import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmrAskerComponent } from './bmr-asker.component';



@NgModule({
  declarations: [BmrAskerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BmrAskerComponent
  ]
})
export class BmrAskerModule { }
