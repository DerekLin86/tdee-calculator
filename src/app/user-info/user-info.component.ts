import { Component, ElementRef, Input, OnInit, ViewChild,  } from '@angular/core';

import { TdInputFormcontrolComponent } from '../shared/tools/td-input-formcontrol/td-input-formcontrol.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  submitCallback: () => void;

  @ViewChild('age', {static: true})
  ageInputComponent: TdInputFormcontrolComponent;

  @ViewChild('height', {static: true})
  heightInputComponent: TdInputFormcontrolComponent;

  @ViewChild('weight', {static: true})
  weightInputComponent: TdInputFormcontrolComponent;

  @ViewChild('userInfo', {static: true})
  userInfoElm: ElementRef;

  get disableNextButton() {
    return this.ageInputComponent.viewModel.value.toString().length <= 0 ||
      this.heightInputComponent.viewModel.value.toString().length <= 0 ||
      this.weightInputComponent.viewModel.value.toString().length <= 0;
  }

  constructor() { }

  ngOnInit() {
  }

  sumbit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }
}
