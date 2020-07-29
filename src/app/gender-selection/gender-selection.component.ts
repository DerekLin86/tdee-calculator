import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren, QueryList } from '@angular/core';

import { GenderSelection } from './gender-selection';

@Component({
  selector: 'app-gender-selection',
  templateUrl: './gender-selection.component.html',
  styleUrls: ['./gender-selection.component.scss']
})
export class GenderSelectionComponent implements AfterViewInit, OnInit {

  public viewModel = {
    options: [{
      text: 'M',
      value: 'male'
    }, {
      text: 'F',
      value: 'female'
    }] as Array<GenderSelection.ViewModel.Option>,
    currentSelectedOption: null as GenderSelection.ViewModel.SelectedItem
  };

  private internalSettings = {
    className: {
      selected: 'selected'
    }
  };

  @Input()
  submitCallback: () => void;

  @ViewChildren('genderItem')
  genderItemArray: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initOption();
  }

  selectOption(option: GenderSelection.ViewModel.Option, index: number) {
    const targetElement = this.genderItemArray.toArray()[index].nativeElement as HTMLElement;

    if (this.viewModel.currentSelectedOption) {
      this.removeClass({
        targetElm: this.viewModel.currentSelectedOption.elemenet,
        className: this.internalSettings.className.selected
      });
    }

    this.appendClass({
      targetElm: targetElement,
      className: this.internalSettings.className.selected
    });

    this.viewModel.currentSelectedOption = {
      elemenet: targetElement,
      option
    };

    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  private initOption() {
    const defaultOptionIndex = 0;
    this.selectOption(
      this.viewModel.options[defaultOptionIndex],
      defaultOptionIndex
    );
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
