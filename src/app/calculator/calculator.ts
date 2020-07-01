import { TDInputFormcontrol } from '../shared/tools/td-input-formcontrol/td-input-formcontrol';
import { TdDrowdown } from '../shared/tools/td-dropdown/td-dropdown';

export namespace Calculator {
  export namespace FormField {
    export class BmrObject {
      basicBmr = null as TDInputFormcontrol.ViewModel;
    }

    export type BmrControl = {
      [ key in keyof Calculator.FormField.BmrObject]: any;
    }

    export class DropdownField {
      feq = null as string | number;
      goal = null as string | number;
      extraCal = null as string | number;
    }

    export type DropdownControl = {
      [key in keyof Calculator.FormField.DropdownField]: any;
    }
  }
}
