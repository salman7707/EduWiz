import { fieldsData } from "@/types/FieldsDataTypes";

export const AssignSubject: fieldsData[] = [
    {
      id: 0,
      label: "Select Class*",
      select: true,
      options: [
        {
          id: 0,
          value: "Select*",
        },
        {
          id: 1,
          value: "computer",
        },
      ],
      colSpan: true,
    },
    {
      id: 1,
      label: "Select Name*",
      type: "text",
      placeholder: "Name Of Subject",
    },
    {
      id: 2,
      label: "Marks*",
      type: "number",
      placeholder: "Total Exam Marks",
    },
  ];