import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TdButtonComponent } from './td-button.component';



@NgModule({
  declarations: [TdButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    TdButtonComponent
  ]
})
export class TdButtonModule { }
