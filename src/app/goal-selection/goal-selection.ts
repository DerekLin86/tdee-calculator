export namespace GoalSelection {
  export interface Option {
    text: string;
    value: GoalSelection.Value;
  }

  export type Value = 'bulking' | 'maintain' | 'cutting';
}
