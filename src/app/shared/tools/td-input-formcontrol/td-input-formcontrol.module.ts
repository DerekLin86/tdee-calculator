import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TdInputFormcontrolComponent } from './td-input-formcontrol.component';

import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [TdInputFormcontrolComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    TdInputFormcontrolComponent
  ]
})
export class TdInputFormcontrolModule { }
