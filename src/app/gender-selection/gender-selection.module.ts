import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderSelectionComponent } from './gender-selection.component';



@NgModule({
  declarations: [GenderSelectionComponent],
  imports: [
    CommonModule
  ],
  exports: [GenderSelectionComponent]
})
export class GenderSelectionModule { }
