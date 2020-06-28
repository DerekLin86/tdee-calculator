import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { TdRadioButtonGroupComponent } from './td-radio-button-group.component';



@NgModule({
  declarations: [TdRadioButtonGroupComponent],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [
    TdRadioButtonGroupComponent
  ]
})
export class TdRadioButtonGroupModule { }
