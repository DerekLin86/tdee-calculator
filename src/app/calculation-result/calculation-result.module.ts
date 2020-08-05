import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculationResultComponent } from './calculation-result.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdInputFormcontrolModule } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';



@NgModule({
  declarations: [CalculationResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TdButtonModule,
    TdInputFormcontrolModule
  ],
  exports: [
    CalculationResultComponent
  ]
})
export class CalculationResultModule { }
