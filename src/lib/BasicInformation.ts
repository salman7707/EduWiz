import { fieldsData } from "@/types/FieldsDataTypes";

const BasicInformationEmployee: fieldsData[] = [
    {
        id: 0, name: "employeeName", theme: "blues", label: "Employee Name*", type: "text", placeholder: "Name Of Employee", select: false, justifyend: false,
    },
    {
        id: 1, name: "mobileNo", theme: "dark", label: "Mobile No for SMS/WhatsApp", type: "text", placeholder: "e.g +44xxxxxxxxxxx", select: false, justifyend: false,
    },
    {
        id: 2, name: "employeeRole", theme: "blues", label: "Employee Role*", select: true,
        options: [
            {
                id: 0,
                value: "Select*",
            },
            {
                id: 1,
                value: "Principal",
            },
            {
                id: 2,
                value: "Managment Staff",
            },
            {
                id: 3,
                value: "Teacher",
            },
            {
                id: 4,
                value: "Accounttant",
            },
            {
                id: 5,
                value: "Store Manager",
            },
            {
                id: 6,
                value: "Other",
            },
        ], placeholder: "Name Of Employee", justifyend: false,
    },
    {
        id: 3, name: "picture", theme: "dark", label: "Picture - Optional", type: "file", select: false, justifyend: false,
    },
    {
        id: 4, name: "dateofjoining", theme: "blues", label: "Date of Joining*", type: "date", select: false, justifyend: false,
    },
    {
        id: 5, name: "monthlsalary", theme: "blues", label: "Monthly Salary*", placeholder: "Monthly Salary", type: "number", select: false, justifyend: false,
    },
]
export default BasicInformationEmployee;