import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergyComponent } from './allergy.component';



@NgModule({
  declarations: [AllergyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AllergyComponent
  ]
})
export class AllergyModule { }
