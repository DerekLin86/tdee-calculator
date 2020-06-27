export namespace TdDrowdown {
  export interface Argument {
    title: string;
    disable?: boolean;
  }
  export interface Option {
    id: number;
    text: string;
    value?: string | number;
  }
}
