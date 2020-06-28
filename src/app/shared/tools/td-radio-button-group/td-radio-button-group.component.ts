import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { TdRadioButtonGroup } from './td-radio-button-group';

@Component({
  selector: 'app-td-radio-button-group',
  templateUrl: './td-radio-button-group.component.html',
  styleUrls: ['./td-radio-button-group.component.scss']
})
export class TdRadioButtonGroupComponent implements OnInit {

  private _options = [] as Array<TdRadioButtonGroup.Option>;

  public viewModel = {
    currentValue: null
  };

  @Input()
  set options(values: Array<TdRadioButtonGroup.Option>) {
    this._options = values;

    for (const value of values) {
      if (!!value.selected) {
        this.viewModel.currentValue = value.value;
        break;
      }
    }
  }

  get options() {
    return this._options;
  }

  @Output()
  optionChange = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() {

  }

  changeOption(event: TdRadioButtonGroup.changeEvent ) {
    this.optionChange.emit(event.value);
    this.options.forEach((option) => {
      const isChangeOption =  option.value === event.value;

      if (isChangeOption) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  }

  getCurrentViewModel() {
    return this.viewModel.currentValue;
  }
}
