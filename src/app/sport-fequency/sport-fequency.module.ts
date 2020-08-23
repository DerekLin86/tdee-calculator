import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportFequencyComponent } from './sport-fequency.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdTipsModule } from '../shared/tools/td-tips/td-tips.module';



@NgModule({
  declarations: [SportFequencyComponent],
  imports: [
    CommonModule,
    TdButtonModule,
    TdTipsModule
  ],
  exports: [
    SportFequencyComponent
  ]
})
export class SportFequencyModule { }
