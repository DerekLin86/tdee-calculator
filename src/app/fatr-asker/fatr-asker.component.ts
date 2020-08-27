import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { filter, first } from 'rxjs/operators';

import { CalculatorService } from '../calculator/calculator.service';

@Component({
  selector: 'app-fatr-asker',
  templateUrl: './fatr-asker.component.html',
  styleUrls: ['./fatr-asker.component.scss']
})
export class FatrAskerComponent implements OnInit {

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
    currentGenderOptions: []
  };

  @Input()
  submitCallback: () => void;

  @ViewChild('fatrAsker', {static: true})
  fatrAskerElm: ElementRef;

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

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

}
