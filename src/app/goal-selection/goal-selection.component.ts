import {
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
export class GoalSelectionComponent implements OnInit {

  public radioOptions: Array<TdRadioButtonGroup.Option> = [{
    text: '增肌',
    value: 'bulking',
    selected: true
  }, {
    text: '維持',
    value: 'maintain',
    selected: false
  }, {
    text: '減脂',
    value: 'cutting',
    selected: false
  }];

  public viewModel = {
    currentValue: null as SaleForceAPI.CalculateTDEE.GoalType
  };

  @Input()
  submitCallback: () => void;

  @ViewChild('goalSelection', {static: true})
  goalSelectionElm: ElementRef;

  @ViewChildren('optionElm')
  optionElmList: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  selectOption(value: SaleForceAPI.CalculateTDEE.GoalType) {
    this.viewModel.currentValue = value;
  }
}
