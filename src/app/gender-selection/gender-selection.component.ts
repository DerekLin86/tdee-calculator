import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren, QueryList } from '@angular/core';
import { filter, first } from 'rxjs/operators';

import { GenderSelection } from './gender-selection';
import { CalculatorService } from '../calculator/calculator.service';

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

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initOption();
  }

  click(option: GenderSelection.ViewModel.Option, index: number) {
    this.selectOption(option, index);
    if (this.submitCallback) {
      this.submitCallback();
    }
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

    this.calculatorService.gender$.next(this.viewModel.currentSelectedOption.option.value);
  }

  private initOption() {
    this.calculatorService.gender$
      .pipe(
        filter((gender) => !!gender),
        first()
      )
      .subscribe((gender) => {
        const defaultOption = this.viewModel.options.find(option => option.value === gender);
        this.selectOption(
          defaultOption,
          this.viewModel.options.indexOf(defaultOption)
        );
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
