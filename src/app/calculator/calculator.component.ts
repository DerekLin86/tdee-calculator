import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';
import { TdRadioButtonGroupComponent } from '../shared/tools/td-radio-button-group/td-radio-button-group.component';
import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements AfterViewInit, OnInit {

  public viewModel = {
    bmrRadioOptions: [{
      text: '知道',
      value: '1',
      selected: false
    }, {
      text: '不知道',
      value: '0',
      selected: true
    }] as Array<TdRadioButtonGroup.Option>,
    sexRadioOptions: [{
      text: '男',
      value: '1',
      selected: true
    }, {
      text: '女',
      value: '2',
      selected: false
    }] as Array<TdRadioButtonGroup.Option>,
    feqDropdownArg: {
      title: '每週運動頻率'
    } as TdDrowdown.Argument,
    goalDropdownArg: {
      title: '目標'
    } as TdDrowdown.Argument,
    extraCalDropdownArg: {
      title: '額外卡路里'
    },
    isUnknown: null as boolean
  };

  @ViewChild('knowBmr', {static: true})
  knowBmrRadioComponet: TdRadioButtonGroupComponent;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initFormValue();
  }

  bmrOptionChange(value: string | number) {
    this.viewModel.isUnknown =
      this.viewModel.bmrRadioOptions.find(
        option => option.text === '不知道'
      ).value === value;
  }

  private initFormValue() {
    this.viewModel.isUnknown = this.viewModel.bmrRadioOptions.find(
      option => option.text === '不知道'
    ).selected;
  }
}
