import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';
import { TdRadioButtonGroupComponent } from '../shared/tools/td-radio-button-group/td-radio-button-group.component';
import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';
import { TDInputFormcontrol } from '../shared/tools/td-input-formcontrol/td-input-formcontrol';
import { TdInputFormcontrolComponent } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.component';
import { Calculator } from './calculator';
import { CalculatorService } from './calculator.service';
import { SaleforceApiService } from '../saleforce-api/saleforce-api.service';
import { SaleForceAPI } from '../saleforce-api/saleforce-api';
import { ScrollMoveDirective } from '../shared/tools/scroll-move/scroll-move.directive';
import { GenderSelectionComponent } from '../gender-selection/gender-selection.component';
import { BmrAskerComponent } from '../bmr-asker/bmr-asker.component';
import { GoalSelectionComponent } from '../goal-selection/goal-selection.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { SportFequencyComponent } from '../sport-fequency/sport-fequency.component';
import { CalculationResultComponent } from '../calculation-result/calculation-result.component';

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
      value: 'male',
      selected: true
    }, {
      text: '女',
      value: 'female',
      selected: false
    }] as Array<TdRadioButtonGroup.Option>,
    basicBmrInputOption: {
      type: 'number',
      disabled: false
    } as TDInputFormcontrol.Options,
    feqDropdownArg: {
      title: '每週運動頻率',
      disableNoneOption: true
    } as TdDrowdown.Argument,
    feqDropdownRange: [] as Array<TdDrowdown.Option>,
    goalDropdownArg: {
      title: '目標',
      disableNoneOption: true
    } as TdDrowdown.Argument,
    goalDropdownOptions: [] as Array<TdDrowdown.Option>,
    extraCalDropdownArg: {
      title: '額外卡路里',
      disableNoneOption: true
    },
    extraCalDropdownOptions: [] as Array<TdDrowdown.Option>,
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
      basicBmr: null as FormGroup,
      dropdown: null as FormGroup
    }
  };

  @ViewChild('knowBmr', {static: true})
  knowBmrRadioComponet: TdRadioButtonGroupComponent;

  @ViewChild('basicBmr', {static: false})
  tdInputFormcontrolComponent: TdInputFormcontrolComponent;

  @ViewChild(GenderSelectionComponent, {static: true})
  genderSelectionComponent: GenderSelectionComponent;

  @ViewChild(BmrAskerComponent, {static: true})
  bmrAskerComponent: BmrAskerComponent;

  @ViewChild(GoalSelectionComponent, {static: true})
  goalSelectionComponent: GoalSelectionComponent;

  @ViewChild(UserInfoComponent, {static: true})
  userInfoComponent: UserInfoComponent;

  @ViewChild(SportFequencyComponent, {static: true})
  sportFequencyComponent: SportFequencyComponent;

  @ViewChild(CalculationResultComponent, {static: true})
  calculationResultComponent: CalculationResultComponent;

  private fakeData = {
    age: 12,
    height: 186,
    weight: 85,
    BFP: 20,
    BMR: 2000,
    exeFrequency: 1.375,
    gender: 'male',
    knowBMR: false,
    goal: 'maintain'
  } as SaleForceAPI.CalculateTDEE.Argument;


  constructor(
    public scrollMoveDirective: ScrollMoveDirective,
    private calculatorService: CalculatorService,
    private formBuilder: FormBuilder,
    private saleforceApiService: SaleforceApiService
  ) { }

  ngOnInit() {
    this.initForm();
    this.initDropOption();
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

  calculateTDEE(postData: SaleForceAPI.CalculateTDEE.Argument) {
    this.calculatorService.calculateTdee(
      postData
    ).subscribe((value) => {
      console.info(value);
    });
  }

  submit() {
    const postData: SaleForceAPI.CalculateTDEE.Argument = {
      age: this.userInfoComponent.ageInputComponent.viewModel.value as number,
      height: this.userInfoComponent.heightInputComponent.viewModel.value as number,
      weight: this.userInfoComponent.weightInputComponent.viewModel.value as number,
      BFP: 20,
      BMR: this.bmrAskerComponent.tdInputFormcontrolComponent.viewModel.value as number || null,
      exeFrequency: this.sportFequencyComponent.currentSelectedValue,
      gender: this.genderSelectionComponent.viewModel.currentSelectedOption ?
        this.genderSelectionComponent.viewModel.currentSelectedOption.option.value :
        null,
      knowBMR: !!this.bmrAskerComponent.tdInputFormcontrolComponent.viewModel,
      goal: this.goalSelectionComponent.viewModel.currentOption ?
        this.goalSelectionComponent.viewModel.currentOption.value :
        null
    };

    this.calculatorService.calculateTdee(postData)
      .subscribe((data) => {
        console.info(data);
      });
  }

  private initForm() {
    const defaultBmrSetting = {
      basicBmr: [null]
    } as Calculator.FormField.BmrControl;
    const defaultDropdownSetting = {
      feq: [null],
      goal: [null],
      extraCal: [null]
    } as Calculator.FormField.DropdownControl;


    this.viewModel.formGroup.basicBmr = this.formBuilder.group(defaultBmrSetting);
    this.viewModel.formGroup.dropdown = this.formBuilder.group(defaultDropdownSetting);
  }

  private initFormValue() {
    this.viewModel.isUnknown = this.viewModel.bmrRadioOptions.find(
      option => option.text === '不知道'
    ).selected;

    this.updateBasicBmrInputOption();
  }

  private initDropOption() {
    this.calculatorService.getSportFeqOptions()
      .subscribe((options) => {
        this.viewModel.feqDropdownRange = options;
      });

    this.calculatorService.getGoalOptions()
      .subscribe((options) => {
        this.viewModel.goalDropdownOptions = options;
      });

    this.calculatorService.getExtraCalOptions()
      .subscribe((options) => {
        this.viewModel.extraCalDropdownOptions = options;
      });
  }

  private updateBasicBmrInputOption() {
    this.viewModel.basicBmrInputOption = Object.assign({}, this.viewModel.basicBmrInputOption, {
      disabled: this.viewModel.isUnknown
    });
  }
}
