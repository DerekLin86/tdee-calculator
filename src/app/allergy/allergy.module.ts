import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergyComponent } from './allergy.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdRadioButtonGroupModule } from '../shared/tools/td-radio-button-group/td-radio-button-group.module';
import { TdInputFormcontrolModule } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';



@NgModule({
  declarations: [AllergyComponent],
  imports: [
    CommonModule,
    TdButtonModule,
    TdInputFormcontrolModule,
    TdRadioButtonGroupModule
  ],
  exports: [
    AllergyComponent
  ]
})
export class AllergyModule { }
