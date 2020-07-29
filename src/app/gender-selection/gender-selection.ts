export namespace GenderSelection {
  export namespace ViewModel {
    export interface Option {
      text: string;
      value: GenderSelection.ViewModel.Gender;
    }

    export interface SelectedItem {
      option: GenderSelection.ViewModel.Option;
      elemenet: HTMLElement;
    }

    export type Gender = 'male' | 'female';
  }
}
