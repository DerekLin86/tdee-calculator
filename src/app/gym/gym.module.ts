import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymComponent } from './gym.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { TdRadioButtonGroupModule } from '../shared/tools/td-radio-button-group/td-radio-button-group.module';
import { TdInputFormcontrolModule } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { SaleforceApiModule } from '../saleforce-api/saleforce-api.module';


@NgModule({
  declarations: [GymComponent],
  imports: [
    CommonModule,
    SaleforceApiModule,
    TdButtonModule,
    TdInputFormcontrolModule,
    TdRadioButtonGroupModule
  ],
  exports: [
    GymComponent
  ]
})
export class GymModule { }
