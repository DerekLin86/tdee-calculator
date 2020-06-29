import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';
import { TdRadioButtonGroupComponent } from '../shared/tools/td-radio-button-group/td-radio-button-group.component';
import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';
import { TDInputFormcontrol } from '../shared/tools/td-input-formcontrol/td-input-formcontrol';
import { TdInputFormcontrolComponent } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.component';
import { Calculator } from './calculator';

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
    basicBmrInputOption: {
      type: 'number',
      disabled: false
    } as TDInputFormcontrol.Options,
    feqDropdownArg: {
      title: '每週運動頻率'
    } as TdDrowdown.Argument,
    goalDropdownArg: {
      title: '目標'
    } as TdDrowdown.Argument,
    extraCalDropdownArg: {
      title: '額外卡路里'
    },
    totalKcalInputOption: {
      type: 'number',
      disabled: true
    } as TDInputFormcontrol.Options,
    goalKcalInputOption: {
      type: 'number',
      disabled: true
    } as TDInputFormcontrol.Options,
    prInputOption: {
      type: 'number',
      disabled: true
    } as TDInputFormcontrol.Options,
    choInputOption: {
      type: 'number',
      disabled: true
    } as TDInputFormcontrol.Options,
    fatInputOption: {
      type: 'number',
      disabled: true
    } as TDInputFormcontrol.Options,
    isUnknown: true as boolean,
    formGroup: {
      basicBmr: null as FormGroup
    }
  };

  @ViewChild('knowBmr', {static: true})
  knowBmrRadioComponet: TdRadioButtonGroupComponent;

  @ViewChild('basicBmr', {static: false})
  tdInputFormcontrolComponent: TdInputFormcontrolComponent;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  ngAfterViewInit() {
    this.initFormValue();
  }

  bmrOptionChange(value: string | number) {
    this.viewModel.isUnknown =
      this.viewModel.bmrRadioOptions.find(
        option => option.text === '不知道'
      ).value === value;

    this.updateBasicBmrInputOption();
  }

  private initForm() {
    const defaultSetting = {
      basicBmr: [null]
    } as Calculator.FormField.BmrControl;

    this.viewModel.formGroup.basicBmr = this.formBuilder.group(defaultSetting);
  }

  private initFormValue() {
    this.viewModel.isUnknown = this.viewModel.bmrRadioOptions.find(
      option => option.text === '不知道'
    ).selected;

    this.updateBasicBmrInputOption();
  }

  private updateBasicBmrInputOption() {
    this.viewModel.basicBmrInputOption = Object.assign({}, this.viewModel.basicBmrInputOption, {
      disabled: this.viewModel.isUnknown
    });
  }
}
