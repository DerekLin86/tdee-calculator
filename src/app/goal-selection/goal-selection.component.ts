import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';

import { SaleForceAPI } from '../saleforce-api/saleforce-api';
import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';
import { TdRadioButtonGroupComponent } from '../shared/tools/td-radio-button-group/td-radio-button-group.component';

@Component({
  selector: 'app-goal-selection',
  templateUrl: './goal-selection.component.html',
  styleUrls: ['./goal-selection.component.scss']
})
export class GoalSelectionComponent implements AfterViewInit, OnInit {

  public radioOptions: Array<TdRadioButtonGroup.Option> = [{
    text: '增肌',
    value: 'bulking'
  }, {
    text: '維持',
    value: 'maintain'
  }, {
    text: '減脂',
    value: 'cutting'
  }];

  public viewModel = {
    currentValue: null as SaleForceAPI.CalculateTDEE.GoalType
  };

  @Input()
  submitCallback: () => void;

  @ViewChild('goalSelection', {static: true})
  goalSelectionElm: ElementRef;

  @ViewChild(TdRadioButtonGroupComponent, {static: true})
  tdRadioButtonGroupComponent: TdRadioButtonGroupComponent;

  @ViewChildren('optionElm')
  optionElmList: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initialOption();
  }

  selectOption(value: SaleForceAPI.CalculateTDEE.GoalType) {
    this.viewModel.currentValue = value;
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  private initialOption() {
    this.tdRadioButtonGroupComponent.selectOption(0);
  }
}
