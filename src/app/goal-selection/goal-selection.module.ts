import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalSelectionComponent } from './goal-selection.component';



@NgModule({
  declarations: [GoalSelectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GoalSelectionComponent
  ]
})
export class GoalSelectionModule { }
