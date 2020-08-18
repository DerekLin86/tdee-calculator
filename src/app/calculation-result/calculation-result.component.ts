import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Calculator } from '../calculator/calculator';
import { CalculationResult } from './calculation-result';
import { ScrollMoveDirective } from '../shared/tools/scroll-move/scroll-move.directive';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss']
})
export class CalculationResultComponent implements OnInit {

  public resultform: FormGroup;

  private _result: Calculator.TDEE.Result = null ;

  @Input()
  set result(data: Calculator.TDEE.Result) {
    if (data) {
      Object.keys(data).forEach((key) => {
        this.resultform.controls[key].patchValue({value: data[key]});
      });
    }

    this._result = data;
  }

  get result() {
    return this._result;
  }

  @ViewChild('calculationResult', {static: false})
  calculationResultElm: ElementRef;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    const defaultFormData: CalculationResult.ResultControl = {
      TDEE: [null],
      targetCarbIntake: [null],
      targetFatIntake: [null],
      targetIntake: [null],
      targetProteinIntake: [null]
    };

    this.resultform = this.formBuilder.group(defaultFormData);
    this.resultform.disable();
  }
}
