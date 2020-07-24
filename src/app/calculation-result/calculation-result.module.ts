import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationResultComponent } from './calculation-result.component';



@NgModule({
  declarations: [CalculationResultComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculationResultComponent
  ]
})
export class CalculationResultModule { }
