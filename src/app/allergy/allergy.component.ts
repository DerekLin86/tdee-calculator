import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';
import { SaleforceApiService } from '../saleforce-api/saleforce-api.service';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss']
})
export class AllergyComponent implements OnInit {

  public radioOptions: Array<TdRadioButtonGroup.Option> = [];

  @Input()
  submitCallback: () => void;

  @ViewChild('allergy', {static: true})
  allergyElm: ElementRef;

  constructor(
    private saleforceApiService: SaleforceApiService
  ) { }

  ngOnInit() {
    this.initAllergyList();
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  private initAllergyList() {
    this.saleforceApiService.getAllergenList()
      .subscribe((allergies: Array<string>) => {
        if (!!allergies) {
          allergies.forEach((allergy) => {
            this.radioOptions.push({
              text: allergy,
              value: allergy
            });
          });
        }
      });
  }
}
