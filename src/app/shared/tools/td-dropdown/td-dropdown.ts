export namespace TdDrowdown {
  export interface Argument {
    title: string;
    disable?: boolean;
    disableNoneOption?: boolean;
  }
  export interface Option {
    id: number;
    text: string;
    value?: string | number;
  }

  export interface ViewModel {
    value: string | number;
  }
}
