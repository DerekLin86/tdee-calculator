import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportFequencyComponent } from './sport-fequency.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';



@NgModule({
  declarations: [SportFequencyComponent],
  imports: [
    CommonModule,
    TdButtonModule
  ],
  exports: [
    SportFequencyComponent
  ]
})
export class SportFequencyModule { }
