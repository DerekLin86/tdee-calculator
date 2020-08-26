import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';

import { SportFequency } from './sport-fequency';

@Component({
  selector: 'app-sport-fequency',
  templateUrl: './sport-fequency.component.html',
  styleUrls: ['./sport-fequency.component.scss']
})
export class SportFequencyComponent implements AfterViewInit, OnInit {

  public viewModel = {
    raidoOptions: [{
      text: '幾乎沒有',
      value: 1.2,
      key: 'first'
    }, {
      text: '一到三次',
      value: 1.375,
      key: 'second'
    }, {
      text: '三到五次',
      value: 1.55,
      key: 'third'
    }, {
      text: '六到七次',
      value: 1.725,
      key: 'fourth'
    }, {
      text: '六到七次高強度運動',
      value: 1.9,
      key: 'fifth'
    }] as Array<SportFequency.Radio.option>,
    currentOptionIndex: null
  };

  private internalSettings = {
    className: {
      selected: 'selected'
    }
  };

  get currentSelectedValue() {
    if (typeof this.viewModel.currentOptionIndex === 'number') {
      return this.viewModel.raidoOptions[this.viewModel.currentOptionIndex].value;
    } else {
      return null;
    }
  }

  @Input()
  submitCallback: () => void;

  @ViewChild('icon', {static: true})
  iconElm: ElementRef;

  @ViewChild('sportFequency', {static: true})
  sportFequencyElm: ElementRef;

  @ViewChildren('optionElm')
  optionList: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initOption();
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  selectOption(index: number) {
    const hasCurrentOption = typeof this.viewModel.currentOptionIndex === 'number';

    if (hasCurrentOption) {
      this.removeClass({
        targetElm: this.optionList.toArray()[this.viewModel.currentOptionIndex].nativeElement as HTMLElement,
        className: this.internalSettings.className.selected
      });
      this.removeClass({
        targetElm: this.iconElm.nativeElement as HTMLElement,
        className: this.viewModel.raidoOptions[this.viewModel.currentOptionIndex].key
      });
    }

    this.appendClass({
      targetElm: this.optionList.toArray()[index].nativeElement as HTMLElement,
      className: this.internalSettings.className.selected
    });
    this.appendClass({
      targetElm: this.iconElm.nativeElement as HTMLElement,
      className: this.viewModel.raidoOptions[index].key
    });

    this.viewModel.currentOptionIndex = index;
  }

  private initOption() {
    const defaultOptionIndex = 0;

    this.selectOption(defaultOptionIndex);
  }

  private appendClass(arg: {
    targetElm: HTMLElement;
    className: string;
  }) {
    const hasNoClass = !arg.targetElm.classList.contains(arg.className);

    if (hasNoClass) {
      arg.targetElm.classList.add(arg.className);
    }
  }

  private removeClass(arg: {
    targetElm: HTMLElement;
    className: string;
  }) {
    const hasClass = arg.targetElm.classList.contains(arg.className);

    if (hasClass) {
      arg.targetElm.classList.remove(arg.className);
    }
  }
}
