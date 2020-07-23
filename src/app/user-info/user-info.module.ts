import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { TdInputFormcontrolModule } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.module';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    TdInputFormcontrolModule,
    TdButtonModule
  ],
  exports: [
    UserInfoComponent
  ]
})
export class UserInfoModule { }
