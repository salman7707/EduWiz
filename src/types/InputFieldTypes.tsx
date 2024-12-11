import { option } from "./FieldsDataTypes";

export interface inputFieldTypes {
    id?: number;
    label?: string;
    placeHolder?: string;
    type?: string;
    theme?: string;
    select?: boolean;
    option?: option[];
    values?: string;
    name?: string;
    handlechange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    handleblur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
}