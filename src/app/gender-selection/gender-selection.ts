export namespace GenderSelection {
  export namespace ViewModel {
    export interface Option {
      text: string;
      value: string;
    }

    export interface SelectedItem {
      option: GenderSelection.ViewModel.Option;
      elemenet: HTMLElement;
    }
  }
}
