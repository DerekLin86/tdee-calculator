import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';

@Injectable()
export class CalculatorService {

  constructor() { }

  getSportFeqOptions(): Observable<Array<TdDrowdown.Option>> {
    const feqOptions = [{
      id: 1,
      text: '幾乎沒有',
      value: 1
    }, {
      id: 2,
      text: '一次到三次',
      value: 2
    }, {
      id: 3,
      text: ' 三次到五次',
      value: 3
    }, {
      id: 4,
      text: '六次到七次',
      value: 4
    }, {
      id: 5,
      text: '六到七次高強度運動',
      value: 5
    }] as Array<TdDrowdown.Option>;

    return of(feqOptions);
  }

  getGoalOptions(): Observable<Array<TdDrowdown.Option>> {
    const options = [{
      id: 1,
      text: '增肌',
      value: 1
    }, {
      id: 2,
      text: '維持',
      value: 2
    }, {
      id: 3,
      text: '減脂',
      value: 3
    }] as Array<TdDrowdown.Option>;

    return of(options);
  }

  getExtraCalOptions(): Observable<Array<TdDrowdown.Option>> {
    const options = [{
      id: 1,
      text: '10%',
      value: 1
    }, {
      id: 2,
      text: '20%',
      value: 2
    }, {
      id: 3,
      text: '30%',
      value: 3
    }] as Array<TdDrowdown.Option>;

    return of(options);
  }
}
