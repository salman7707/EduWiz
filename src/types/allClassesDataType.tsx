import { ClassPercentageDataTypes } from "./ClassPercentageDataTypes";

export interface allClassesDataType {
  id?: number;
  classname?: string;
  boysPercentage?: string;
  grilsPercentage?: string;
  naPercentage?: string;
  totalStudents?: number;
  totalsubjects?: number;
  boys?: number;
  girls?: number;
  na?: number;
  totalmarks?: number;
  percentageData?: ClassPercentageDataTypes[];
}
