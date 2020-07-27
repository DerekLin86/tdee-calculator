import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationResultComponent } from './calculation-result.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';



@NgModule({
  declarations: [CalculationResultComponent],
  imports: [
    CommonModule,
    TdButtonModule
  ],
  exports: [
    CalculationResultComponent
  ]
})
export class CalculationResultModule { }
