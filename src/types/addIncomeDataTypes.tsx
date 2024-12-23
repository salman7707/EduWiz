export interface option {
  id: number;
  value: string;
}
export interface addIncomeType {
  id?: number;
  name?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  option?: option[];
}
