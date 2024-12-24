import { fieldsData } from "@/types/FieldsDataTypes";

const AddNewClassesData: fieldsData[] = [
  {
    id: 0,
    name: "className",
    label: "Class Name*",
    type: "text",
    placeholder: "Name Of Class",
  },
  {
    id: 1,
    name: "monthlytutionfee",
    label: "Monthly Tuition Fees*",
    type: "number",
    placeholder: "Monthly Tution Fees",
  },
  {
    id: 2,
    name: "selectteacher",
    label: "Select Class Teacher*",
    select: true,
    options: [
      {
        id: 0,
        value: "Select*",
      },
      {
        id: 1,
        value: "Salman",
      },
    ],
  },
];
export default AddNewClassesData;