import { fieldsData } from "./FieldsDataTypes";

export interface InputSectionProps {
    inputFields: fieldsData[];
    sectionNumber: string | number;
    sectionHeading: string;
    formikProps: {
      values: Record<string, string>;
      errors: Record<string, string>;
      touched: Record<string, boolean>;
      handleChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLSelectElement
      >;
      handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
    };
  }