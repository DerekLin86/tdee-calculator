import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymComponent } from './gym.component';



@NgModule({
  declarations: [GymComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GymComponent
  ]
})
export class GymModule { }
