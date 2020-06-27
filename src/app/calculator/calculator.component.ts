import { Component, OnInit } from '@angular/core';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public viewModel = {
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
