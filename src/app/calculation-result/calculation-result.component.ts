import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss']
})
export class CalculationResultComponent implements OnInit {

  @Input()
  submitCallback: () => void;

  @ViewChild('calculationResult', {static: true})
  calculationResultElm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }
}
