import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { CalculatorComponent } from './calculator.component';
import { TdInputFormcontrolModule  } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { TdDropdownModule } from '../shared/tools/td-dropdown/td-dropdown.module';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatRadioModule,
    TdDropdownModule,
    TdInputFormcontrolModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
