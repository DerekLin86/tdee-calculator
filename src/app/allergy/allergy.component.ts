import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss']
})
export class AllergyComponent implements OnInit {

  public radioOptions: Array<TdRadioButtonGroup.Option> = [{
    text: '過敏原1',
    value: '過敏原1'
  }, {
    text: '過敏原2',
    value: '過敏原2'
  }, {
    text: '過敏原3',
    value: '過敏原3'
  }];

  @Input()
  submitCallback: () => void;

  @ViewChild('allergy', {static: true})
  allergyElm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }
}
