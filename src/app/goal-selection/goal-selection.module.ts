import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalSelectionComponent } from './goal-selection.component';
import { TdTipsModule } from '../shared/tools/td-tips/td-tips.module';



@NgModule({
  declarations: [GoalSelectionComponent],
  imports: [
    CommonModule,
    TdTipsModule
  ],
  exports: [
    GoalSelectionComponent
  ]
})
export class GoalSelectionModule { }
