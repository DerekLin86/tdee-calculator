import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, Subject } from 'rxjs';
import { filter, map} from 'rxjs/operators';

import { Calculator } from '../calculator/calculator';
import { CalculationResult } from './calculation-result';
import { ScrollMoveDirective } from '../shared/tools/scroll-move/scroll-move.directive';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss']
})
export class CalculationResultComponent implements AfterViewInit, OnInit {

  public resultform: FormGroup;

  private _result: Calculator.TDEE.Result = null ;
  private result$ =  new Subject<Calculator.TDEE.Result>();
  private afterViewInitDelay$ = new Subject<boolean>();

  @Input()
  set result(data: Calculator.TDEE.Result) {
    this.result$.next(data);
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
    this.initializeViewModel();
  }

  ngAfterViewInit() {
    this.afterViewInitDelay$.next(true);
  }

  private initializeViewModel() {
    combineLatest(this.afterViewInitDelay$, this.result$)
      .pipe(
        map(([signal, result]) => {
          return result;
        }),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        Object.keys(result).forEach((key) => {
          this.resultform.controls[key].patchValue({value: result[key]});
        });
      });
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
