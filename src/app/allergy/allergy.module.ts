import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergyComponent } from './allergy.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';



@NgModule({
  declarations: [AllergyComponent],
  imports: [
    CommonModule,
    TdButtonModule
  ],
  exports: [
    AllergyComponent
  ]
})
export class AllergyModule { }
