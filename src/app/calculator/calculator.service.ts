import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';
import { SaleForceAPI } from '../saleforce-api/saleforce-api';
import { SaleforceApiService } from '../saleforce-api/saleforce-api.service';
import { Calculator } from './calculator';
import { GenderSelection } from '../gender-selection/gender-selection';

@Injectable()
export class CalculatorService {

  public gender$ = new BehaviorSubject<GenderSelection.ViewModel.Gender>('male');
  public tdeeResult$ = new BehaviorSubject<Calculator.TDEE.Result>(null);

  constructor(
    private saleforceApiService: SaleforceApiService
  ) { }

  getSportFeqOptions(): Observable<Array<TdDrowdown.Option>> {
    const feqOptions = [{
      id: 1,
      text: '幾乎沒有',
      value: 1.2
    }, {
      id: 2,
      text: '一次到三次',
      value: 1.375
    }, {
      id: 3,
      text: ' 三次到五次',
      value: 1.55
    }, {
      id: 4,
      text: '六次到七次',
      value: 1.725
    }, {
      id: 5,
      text: '六到七次高強度運動',
      value: 1.9
    }] as Array<TdDrowdown.Option>;

    return of(feqOptions);
  }

  getGoalOptions(): Observable<Array<TdDrowdown.Option>> {
    const options = [{
      id: 1,
      text: '增肌',
      value: 'bulking'
    }, {
      id: 2,
      text: '維持',
      value: 'maintain'
    }, {
      id: 3,
      text: '減脂',
      value: 'cutting'
    }] as Array<TdDrowdown.Option>;

    return of(options);
  }

  getExtraCalOptions(): Observable<Array<TdDrowdown.Option>> {
    const options = [{
      id: 1,
      text: '10%',
      value: 10
    }, {
      id: 2,
      text: '20%',
      value: 20
    }, {
      id: 3,
      text: '30%',
      value: 30
    }] as Array<TdDrowdown.Option>;

    return of(options);
  }

  calculateTdee(arg: SaleForceAPI.CalculateTDEE.Argument): Observable<SaleForceAPI.CalculateTDEE.Response> {
    return this.saleforceApiService.calculateTDEE(
      arg as SaleForceAPI.CalculateTDEE.Argument
    ) as Observable<SaleForceAPI.CalculateTDEE.Response>;
  }
}
