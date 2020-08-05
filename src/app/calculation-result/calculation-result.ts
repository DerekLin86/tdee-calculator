import { TDInputFormcontrol } from '../shared/tools/td-input-formcontrol/td-input-formcontrol';

export namespace CalculationResult {
  export class ResultObject {
    TDEE: TDInputFormcontrol.ViewModel;
    targetCarbIntake: TDInputFormcontrol.ViewModel;
    targetFatIntake: TDInputFormcontrol.ViewModel;
    targetIntake: TDInputFormcontrol.ViewModel;
    targetProteinIntake: TDInputFormcontrol.ViewModel;
  }

  export type ResultControl = {
    [ key in keyof CalculationResult.ResultObject]: any;
  };
}
