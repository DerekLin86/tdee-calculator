import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { TdRadioButtonGroupComponent } from './td-radio-button-group.component';



@NgModule({
  declarations: [TdRadioButtonGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule
  ],
  exports: [
    TdRadioButtonGroupComponent
  ]
})
export class TdRadioButtonGroupModule { }
