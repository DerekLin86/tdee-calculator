import { Component, Input, OnInit } from '@angular/core';

import { TdDrowdown } from './td-dropdown';

@Component({
  selector: 'app-td-dropdown',
  templateUrl: './td-dropdown.component.html',
  styleUrls: ['./td-dropdown.component.scss']
})
export class TdDropdownComponent implements OnInit {

  private _argument = {} as TdDrowdown.Argument;
  private _range = [] as Array<TdDrowdown.Option>;

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

  constructor() { }

  ngOnInit() {
  }

}
