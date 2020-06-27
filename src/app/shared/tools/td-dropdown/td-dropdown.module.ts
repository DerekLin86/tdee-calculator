import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { TdDropdownComponent } from './td-dropdown.component';



@NgModule({
  declarations: [TdDropdownComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    TdDropdownComponent
  ]
})
export class TdDropdownModule { }
