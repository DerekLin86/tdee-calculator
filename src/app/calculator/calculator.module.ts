import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from './calculator.service';
import { TdInputFormcontrolModule  } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { TdDropdownModule } from '../shared/tools/td-dropdown/td-dropdown.module';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdRadioButtonGroupModule } from '../shared/tools/td-radio-button-group/td-radio-button-group.module';
import { SaleforceApiModule } from '../saleforce-api/saleforce-api.module';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    TdButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    TdDropdownModule,
    TdInputFormcontrolModule,
    TdRadioButtonGroupModule,
    SaleforceApiModule
  ],
  exports: [CalculatorComponent],
  providers: [CalculatorService]
})
export class CalculatorModule { }
