import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymComponent } from './gym.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';



@NgModule({
  declarations: [GymComponent],
  imports: [
    CommonModule,
    TdButtonModule
  ],
  exports: [
    GymComponent
  ]
})
export class GymModule { }
