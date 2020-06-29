import { TDInputFormcontrol } from '../shared/tools/td-input-formcontrol/td-input-formcontrol';

export namespace Calculator {
  export namespace FormField {
    export class BmrObject {
      basicBmr = null as TDInputFormcontrol.ViewModel;
    }

    export type BmrControl = {
      [ key in keyof Calculator.FormField.BmrObject]: any;
    }
  }
}
