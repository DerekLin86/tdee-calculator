import { Injectable } from '@angular/core';
import { SaleForceAPI, ApiObservableBuilder } from './saleforce-api';

declare let getTdeeApiWrapper: () => any;

@Injectable()
export class SaleforceApiService {

  private DEFAULT_CONFIG: SaleForceAPI.CallConfiguration = { buffer: true, escape: false, timeout: 30000 };

  constructor() { }

  private getCallBuilder<T>(): ApiObservableBuilder<T> {
    return new ApiObservableBuilder<T>();
  }

  public helloAngular(name: string) {
    const api = getTdeeApiWrapper();
    const builder = this.getCallBuilder<string>();

    return (builder.build(() => api.helloAngular(name, builder.getResponseHandler(), this.DEFAULT_CONFIG)));
  }
}
