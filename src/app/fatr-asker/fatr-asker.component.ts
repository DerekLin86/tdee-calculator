import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { filter } from 'rxjs/operators';

import { CalculatorService } from '../calculator/calculator.service';

@Component({
  selector: 'app-fatr-asker',
  templateUrl: './fatr-asker.component.html',
  styleUrls: ['./fatr-asker.component.scss']
})
export class FatrAskerComponent implements AfterViewInit, OnInit {

  private internalSettings = {
    className: {
      selected: 'selected'
    }
  };

  public viewModel = {
    femaleOptions: [{
      imageUrl: 'assets/images/fatr-asker/female1.png',
      text: '< 10%'
    }, {
      imageUrl: 'assets/images/fatr-asker/female2.png',
      text: '10% ~ 15%'
    }, {
      imageUrl: 'assets/images/fatr-asker/female3.png',
      text: '15% ~ 20%'
    }, {
      imageUrl: 'assets/images/fatr-asker/female4.png',
      text: '20% ~ 25%'
    }, {
      imageUrl: 'assets/images/fatr-asker/female5.png',
      text: '25% ~ 30%'
    }, {
      imageUrl: 'assets/images/fatr-asker/female6.png',
      text: '> 30%'
    }],
    maleOptions: [{
      imageUrl: 'assets/images/fatr-asker/male1.png',
      text: '< 10%'
    }, {
      imageUrl: 'assets/images/fatr-asker/male2.png',
      text: '10% ~ 15%'
    }, {
      imageUrl: 'assets/images/fatr-asker/male3.png',
      text: '15% ~ 20%'
    }, {
      imageUrl: 'assets/images/fatr-asker/male4.png',
      text: '25% ~ 30%'
    }, {
      imageUrl: 'assets/images/fatr-asker/male5.png',
      text: '25% ~ 30%'
    }, {
      imageUrl: 'assets/images/fatr-asker/male6.png',
      text: '> 30%'
    }],
    currentGenderOptions: [],
    currentSelectedOptionIndex: null
  };

  @Input()
  submitCallback: () => void;

  @ViewChild('fatrAsker', {static: true})
  fatrAskerElm: ElementRef;

  @ViewChildren('genderOption')
  genderOptionList: QueryList<ElementRef>;

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.calculatorService.gender$
      .pipe(
        filter(gender => !!gender),
      )
      .subscribe((gender) => {
        this.viewModel.currentGenderOptions = gender === 'male' ?
          this.viewModel.maleOptions :
          this.viewModel.femaleOptions;
      });
  }

  ngAfterViewInit() {
    this.initDefaultOption();
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  selectOption(optionIndex: number) {
    if (typeof this.viewModel.currentSelectedOptionIndex === 'number') {
      this.removeClass({
        targetElm: this.genderOptionList.toArray()[this.viewModel.currentSelectedOptionIndex],
        className: this.internalSettings.className.selected
      });
    }

    if (typeof optionIndex === 'number') {
      this.appendClass({
        targetElm: this.genderOptionList.toArray()[optionIndex],
        className: this.internalSettings.className.selected
      });
      this.viewModel.currentSelectedOptionIndex = optionIndex;
    }
  }

  private initDefaultOption() {
    const defaultOptionIndex = 0;

    this.selectOption(defaultOptionIndex);
  }

  private appendClass(arg: {
    targetElm: ElementRef;
    className: string;
  }) {
    const hasNoClass = !(arg.targetElm.nativeElement as HTMLElement).classList.contains(arg.className);

    if (hasNoClass) {
      (arg.targetElm.nativeElement as HTMLElement).classList.add(arg.className);
    }
  }

  private removeClass(arg: {
    targetElm: ElementRef;
    className: string;
  }) {
    const hasClass = (arg.targetElm.nativeElement as HTMLElement).classList.contains(arg.className);

    if (hasClass) {
      (arg.targetElm.nativeElement as HTMLElement).classList.remove(arg.className);
    }
  }
}
