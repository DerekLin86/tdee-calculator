import { Component, OnInit, Input } from '@angular/core';

import { TdRadioButtonGroup } from './td-radio-button-group';

@Component({
  selector: 'app-td-radio-button-group',
  templateUrl: './td-radio-button-group.component.html',
  styleUrls: ['./td-radio-button-group.component.scss']
})
export class TdRadioButtonGroupComponent implements OnInit {

  private _options = [] as Array<TdRadioButtonGroup.Option>;

  @Input()
  set options(value: Array<TdRadioButtonGroup.Option>) {
    this._options = value;
  }

  get options() {
    return this._options;
  }

  constructor() { }

  ngOnInit() {
  }

}
