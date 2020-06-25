import { Component, OnInit, Input } from '@angular/core';

import { TDInputFormcontrol } from './td-input-formcontrol';

@Component({
  selector: 'app-td-input-formcontrol',
  templateUrl: './td-input-formcontrol.component.html',
  styleUrls: ['./td-input-formcontrol.component.scss']
})
export class TdInputFormcontrolComponent implements OnInit {

  private _option = null as TDInputFormcontrol.Options;

  @Input()
  set option(value: TDInputFormcontrol.Options) {
    const defaultOption = {
      type: 'text'
    } as TDInputFormcontrol.Options;


    this._option = Object.assign(defaultOption, value);
  }

  get option() {
    return this._option;
  }

  public viewModel = {} as TDInputFormcontrol.ViewModel;

  constructor() { }

  ngOnInit() {
  }

}
