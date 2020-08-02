import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TDInputFormcontrol } from './td-input-formcontrol';

@Component({
  selector: 'app-td-input-formcontrol',
  templateUrl: './td-input-formcontrol.component.html',
  styleUrls: ['./td-input-formcontrol.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdInputFormcontrolComponent),
    multi: true
  }]
})
export class TdInputFormcontrolComponent implements ControlValueAccessor, OnInit {

  private _option = null as TDInputFormcontrol.Options;

  @Input()
  set option(value: TDInputFormcontrol.Options) {
    const defaultOption = {
      type: 'text'
    } as TDInputFormcontrol.Options;

    this._option = Object.assign({}, defaultOption, value);
  }

  get option() {
    return this._option;
  }

  @Input()
  disabled: boolean;

  public viewModel = {
    value: ''
  } as TDInputFormcontrol.ViewModel;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: TDInputFormcontrol.ViewModel) {
    if (value) {
      this.viewModel = value;
    }
  }

  registerOnChange() {}

  registerOnTouched() {}

}
