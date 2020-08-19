import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmrAskerComponent } from './bmr-asker.component';
import { TdInputFormcontrolModule } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdTipsModule } from '../shared/tools/td-tips/td-tips.module';



@NgModule({
  declarations: [BmrAskerComponent],
  imports: [
    CommonModule,
    TdButtonModule,
    TdInputFormcontrolModule,
    TdTipsModule
  ],
  exports: [
    BmrAskerComponent
  ]
})
export class BmrAskerModule { }
