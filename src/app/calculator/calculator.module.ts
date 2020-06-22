import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { CalculatorComponent } from './calculator.component';
import { TdInputFormcontrolModule  } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatRadioModule,
    TdInputFormcontrolModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
