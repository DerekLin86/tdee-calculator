import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleforceApiService } from './saleforce-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SaleforceApiService]
})
export class SaleforceApiModule { }
