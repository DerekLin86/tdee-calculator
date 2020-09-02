import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { TdRadioButtonGroup } from '../shared/tools/td-radio-button-group/td-radio-button-group';
import { SaleforceApiService } from '../saleforce-api/saleforce-api.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  public radioOptions: Array<TdRadioButtonGroup.Option> = [];

  @Input()
  submitCallback: () => void;

  @ViewChild('gym', {static: true})
  gymElm: ElementRef;

  constructor(
    private saleforceApiService: SaleforceApiService
  ) { }

  ngOnInit() {
    this.initGymList();
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  private initGymList() {
    this.saleforceApiService.getGymList()
      .subscribe((gyms: Array<string>) => {
        if (!!gyms) {
          gyms.forEach((gym) => {
            this.radioOptions.push({
              text: gym,
              value: gym
            });
          });
        }
      });
  }
}
