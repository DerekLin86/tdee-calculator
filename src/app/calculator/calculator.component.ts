import { Component, OnInit } from '@angular/core';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';
import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public viewModel = {
    bmrRadioOptions: [{
      text: '知道',
      value: '1'
    }, {
      text: '不知道',
      value: '0'
    }] as Array<TdRadioButtonGroup.Option>,
    sexRadioOptions: [{
      text: '男',
      value: '1'
    }, {
      text: '女',
      value: '2'
    }] as Array<TdRadioButtonGroup.Option>,
    feqDropdownArg: {
      title: '每週運動頻率'
    } as TdDrowdown.Argument,
    goalDropdownArg: {
      title: '目標'
    } as TdDrowdown.Argument,
    extraCalDropdownArg: {
      title: '額外卡路里'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
