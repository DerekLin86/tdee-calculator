import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from './calculator.service';
import { GenderSelectionModule } from '../gender-selection/gender-selection.module';
import { TdInputFormcontrolModule  } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { TdDropdownModule } from '../shared/tools/td-dropdown/td-dropdown.module';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdRadioButtonGroupModule } from '../shared/tools/td-radio-button-group/td-radio-button-group.module';
import { SaleforceApiModule } from '../saleforce-api/saleforce-api.module';
import { BmrAskerModule } from '../bmr-asker/bmr-asker.module';
import { GoalSelectionModule } from '../goal-selection/goal-selection.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { SportFequencyModule } from '../sport-fequency/sport-fequency.module';
import { CalculationResultModule } from '../calculation-result/calculation-result.module';
import { ScrollMoveModule } from '../shared/tools/scroll-move/scroll-move.module';
import { FatrAskerModule } from '../fatr-asker/fatr-asker.module';
import { AllergyModule } from '../allergy/allergy.module';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    AllergyModule,
    BmrAskerModule,
    CommonModule,
    CalculationResultModule,
    FatrAskerModule,
    FormsModule,
    GenderSelectionModule,
    TdButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    TdDropdownModule,
    TdInputFormcontrolModule,
    TdRadioButtonGroupModule,
    SaleforceApiModule,
    GoalSelectionModule,
    UserInfoModule,
    SportFequencyModule,
    ScrollMoveModule
  ],
  exports: [CalculatorComponent],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
