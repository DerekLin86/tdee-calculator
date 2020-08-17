import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  @Input()
  submitCallback: () => void;

  @ViewChild('gym', {static: true})
  gymElm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }
}
