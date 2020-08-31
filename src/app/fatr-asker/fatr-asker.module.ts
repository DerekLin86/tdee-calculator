import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatrAskerComponent } from './fatr-asker.component';
import { TdButtonModule } from '../shared/tools/td-button/td-button.module';
import { StaticPathModule } from '../static-path/static-path.module';


@NgModule({
  declarations: [FatrAskerComponent],
  imports: [
    CommonModule,
    StaticPathModule,
    TdButtonModule
  ],
  exports: [
    FatrAskerComponent
  ]
})
export class FatrAskerModule { }
