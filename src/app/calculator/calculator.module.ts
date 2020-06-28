import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { CalculatorComponent } from './calculator.component';
import { TdInputFormcontrolModule  } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { TdDropdownModule } from '../shared/tools/td-dropdown/td-dropdown.module';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdRadioButtonGroupModule } from '../shared/tools/td-radio-button-group/td-radio-button-group.module';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    TdButtonModule,
    MatInputModule,
    TdDropdownModule,
    TdInputFormcontrolModule,
    TdRadioButtonGroupModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
