import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  public radioOptions: Array<TdRadioButtonGroup.Option> = [{
    text: 'Word Gym',
    value: 'Word Gym'
  }, {
    text: '健身工廠',
    value: '健身工廠'
  }, {
    text: '成吉思汗',
    value: '成吉思汗'
  }, {
    text: '享健身',
    value: '享健身'
  }];

  @Input()
  submitCallback: () => void;

  @ViewChild('gym', {static: true})
  gymElm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }
}
