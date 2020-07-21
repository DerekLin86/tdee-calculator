import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-td-button',
  templateUrl: './td-button.component.html',
  styleUrls: ['./td-button.component.scss']
})
export class TdButtonComponent implements OnInit {

  @Input()
  disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
