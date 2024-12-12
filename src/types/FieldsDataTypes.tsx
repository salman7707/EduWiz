import { employeename } from "@/components/shared/pageSection/addEmployeePageSection/EmployeeFormSection";
import { Name } from "@/components/shared/pageSection/addStudentPageSection/FormSection";

export type option = {
  id?: number;
  value?: string;
};

export type fieldsData = {
  id?: number;
  name?: Name | employeename;
  label?: string;
  placeholder?: string;
  type?: string;
  options?: option[];
  value?: string;
  justifyend?: boolean;
  colSpan?: boolean;
  select?: boolean;
  theme?: string;
};
