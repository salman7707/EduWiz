import { employeename } from "@/components/shared/pageSection/addEmployeePageSection/EmployeeFormSection";
import { Name } from "@/components/shared/pageSection/addStudentPageSection/FormSection";

export type option = {
  id?: number;
  value?: string;
};

export type fieldsData = {
  id?: number;
  name?: Name | employeename | string;
  label?: string;
  placeholder?: string;
  type?: string;
  options?: option[];
  value?: string | number;
  justifyend?: boolean;
  colSpan?: boolean;
  select?: boolean;
  theme?: string;
};
