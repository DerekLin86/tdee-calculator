import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fatr-asker',
  templateUrl: './fatr-asker.component.html',
  styleUrls: ['./fatr-asker.component.scss']
})
export class FatrAskerComponent implements OnInit {

  @Input()
  submitCallback: () => void;

  @ViewChild('fatrAsker', {static: true})
  fatrAskerElm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

}
