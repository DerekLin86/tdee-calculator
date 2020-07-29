import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss']
})
export class CalculationResultComponent implements OnInit {

  @ViewChild('calculationResult', {static: true})
  calculationResultElm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
