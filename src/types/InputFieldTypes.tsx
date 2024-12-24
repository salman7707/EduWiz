import { option } from "./FieldsDataTypes";

export interface inputFieldTypes {
  id?: number;
  label?: string;
  placeHolder?: string;
  type?: string;
  theme?: string;
  select?: boolean;
  option?: option[];
  values?: string | number;
  name?: string;
  setFieldValue?: (field: string, value: File | boolean | undefined) => void;
  handlechange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleblur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  width?: string;
  color?: string;
  size?: string;
  maxSizeCard?: boolean;
}
