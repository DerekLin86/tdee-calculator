import { Component, OnInit, ViewChild } from '@angular/core';

import { TdInputFormcontrolComponent } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.component';

@Component({
  selector: 'app-bmr-asker',
  templateUrl: './bmr-asker.component.html',
  styleUrls: ['./bmr-asker.component.scss']
})
export class BmrAskerComponent implements OnInit {

  @ViewChild(TdInputFormcontrolComponent, {static: true})
  tdInputFormcontrolComponent: TdInputFormcontrolComponent;

  get disableNextButton() {
    return this.tdInputFormcontrolComponent &&
      this.tdInputFormcontrolComponent.viewModel.value.toString().length <= 0;
  }

  constructor() { }

  ngOnInit() {
  }

  clearInputData() {
    if (this.tdInputFormcontrolComponent) {
      this.tdInputFormcontrolComponent.viewModel.value = '';
    }
  }

}
