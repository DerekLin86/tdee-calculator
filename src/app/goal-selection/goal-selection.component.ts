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

import { GoalSelection } from './goal-selection';

@Component({
  selector: 'app-goal-selection',
  templateUrl: './goal-selection.component.html',
  styleUrls: ['./goal-selection.component.scss']
})
export class GoalSelectionComponent implements AfterViewInit, OnInit {

  public options: Array<GoalSelection.Option> = [{
    text: '增肌',
    value: 'bulking'
  }, {
    text: '維持',
    value: 'maintain'
  }, {
    text: '減脂',
    value: 'cutting'
  }];

  public viewModel = {
    currentOption: null as GoalSelection.Option,
    currentOptionIndex: null as number
  };

  private internalSettings = {
    className: {
      selected: 'selected'
    }
  };

  @Input()
  submitCallback: () => void;

  @ViewChild('goalSelection', {static: true})
  goalSelectionElm: ElementRef;

  @ViewChildren('optionElm')
  optionElmList: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initialOption();
  }

  click(option: GoalSelection.Option, index: number) {
    this.selectOption(option, index);
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  selectOption(option: GoalSelection.Option, index: number) {
    if (typeof this.viewModel.currentOptionIndex === 'number') {
      const currentOptionElm = this.optionElmList.toArray()[this.viewModel.currentOptionIndex].nativeElement as HTMLElement;

      this.removeClass({
        targetElm: currentOptionElm,
        className: this.internalSettings.className.selected
      });
    }

    const targetOptionElm = this.optionElmList.toArray()[index].nativeElement as HTMLElement;

    this.appendClass({
      targetElm: targetOptionElm,
      className: this.internalSettings.className.selected
    });

    this.viewModel.currentOption = option;
    this.viewModel.currentOptionIndex = index;

  }

  private initialOption() {
    const targetOptionIndex = 0;

    this.selectOption(this.options[targetOptionIndex], targetOptionIndex);
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
