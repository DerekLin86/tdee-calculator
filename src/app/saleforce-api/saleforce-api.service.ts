import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SaleForceAPI } from './saleforce-api';

declare let getTdeeApiWrapper: any;

@Injectable()
export class SaleforceApiService {

  public controller: SaleForceAPI.Controller.Interface = null;

  constructor() {
    this.initController();
  }

  calculateTDEE(arg: SaleForceAPI.CalculateTDEE.Argument) {
    const observer = new Observable((observer) => {
      if (this.controller) {
        this.controller.calculateTDEE(
          JSON.stringify(arg),
          (result: SaleForceAPI.CalculateTDEE.Response, status) => {
            observer.next(result);
            observer.complete();
          },
          { buffer: true, escape: false, timeout: 30000 }
        );
      }
    });

    return observer;
  }

  private initController() {
    this.controller = getTdeeApiWrapper();
  }
}
