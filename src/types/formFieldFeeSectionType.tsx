import { option } from "./FieldsDataTypes";

export interface formFieldFeeSectionTypes {
  id?: number;
  label?: string;
  placeHolder?: string;
  type?: string;
  theme?: string;
  select?: boolean;
  option?: option[];
  values?: string | number;
  name?: string;
  handlechange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  handleblur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  width?: string;
}
