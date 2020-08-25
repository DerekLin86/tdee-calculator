import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalSelectionComponent } from './goal-selection.component';
import { TdTipsModule } from '../shared/tools/td-tips/td-tips.module';
import { TdRadioButtonGroupModule } from '../shared/tools/td-radio-button-group/td-radio-button-group.module';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';


@NgModule({
  declarations: [GoalSelectionComponent],
  imports: [
    CommonModule,
    TdButtonModule,
    TdRadioButtonGroupModule,
    TdTipsModule
  ],
  exports: [
    GoalSelectionComponent
  ]
})
export class GoalSelectionModule { }
