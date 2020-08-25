import { Component, ElementRef, EventEmitter, OnInit, Input, Output, QueryList, ViewChildren } from '@angular/core';

import { TdRadioButtonGroup } from './td-radio-button-group';

@Component({
  selector: 'app-td-radio-button-group',
  templateUrl: './td-radio-button-group.component.html',
  styleUrls: ['./td-radio-button-group.component.scss']
})
export class TdRadioButtonGroupComponent implements OnInit {

  private _options = [] as Array<TdRadioButtonGroup.Option>;
  private internalSettings = {
    className: {
      selected: 'selected'
    }
  };

  public viewModel = {
    currentValue: null,
    currentOptionIndex: null as number
  };

  @Input()
  set options(values: Array<TdRadioButtonGroup.Option>) {
    this._options = values;
  }

  get options() {
    return this._options;
  }

  @Output()
  optionChange = new EventEmitter<string | number>();

  @ViewChildren('optionElm')
  optionList: QueryList<ElementRef>;

  constructor() {}

  ngOnInit() {

  }

  selectOption(index: number) {
    const hasCurrentOption = typeof this.viewModel.currentOptionIndex === 'number';

    if (hasCurrentOption) {
      this.removeClass({
        targetElm: this.optionList.toArray()[this.viewModel.currentOptionIndex].nativeElement as HTMLElement,
        className: this.internalSettings.className.selected
      });
    }

    this.appendClass({
      targetElm: this.optionList.toArray()[index].nativeElement as HTMLElement,
      className: this.internalSettings.className.selected
    });

    this.viewModel = Object.assign(this.viewModel, {
      currentValue: this.options[index].value,
      currentOptionIndex: index
    });
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
