import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TdDrowdown } from './td-dropdown';

@Component({
  selector: 'app-td-dropdown',
  templateUrl: './td-dropdown.component.html',
  styleUrls: ['./td-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDropdownComponent),
    multi: true
  }]
})
export class TdDropdownComponent implements ControlValueAccessor, OnInit {

  private _argument = {} as TdDrowdown.Argument;
  private _range = [] as Array<TdDrowdown.Option>;
  private propagateChange = (_: any) => {};

  @Input()
  set argument(value: TdDrowdown.Argument) {
    const defaultSetting = {
      title: '下拉式選單'
    } as TdDrowdown.Argument;

    this._argument = Object.assign(defaultSetting, value);
  }

  get argument() {
    return this._argument;
  }

  @Input()
  set range(value: Array<TdDrowdown.Option>) {
    this._range = value;
  }

  get range() {
    return this._range;
  }

  public viewModel = null as TdDrowdown.ViewModel;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: TdDrowdown.ViewModel) {
    if (!!value) {
      this.viewModel = value;
    }
  }

  selectedChanged(event: any) {
    const selectedValue = event.value;
    const selectedOption = this.range.find((option) => option.value === selectedValue);

    if (!!selectedOption) {
      this.writeValue({value: selectedValue});
      this.propagateChange({value: selectedValue});
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
