import { MatRadioButton } from '@angular/material/radio';

export namespace TdRadioButtonGroup {
  export interface Option {
    text: string;
    value: number | string;
    selected: boolean;
  }

  export interface changeEvent {
    source: MatRadioButton;
    value: any;
  }
}
