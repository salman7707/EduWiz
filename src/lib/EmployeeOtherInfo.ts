import { fieldsData } from "@/types/FieldsDataTypes";

const EmployeeOtherInfo: fieldsData[] = [
    {
        id: 0, name: "father", value: "", type: "text", label: "Father / Husband Name", placeholder: "Father / Husband Name", select: false, justifyend: false, theme: "dark",
    },
    {
        id: 1, name: "gender", value: "", label: "Gender", select: true, theme: "dark", options: [
            {
                id: 0,
                value: "Select",
            },
            {
                id: 1,
                value: "Male",
            },
            {
                id: 2,
                value: "Female",
            },
        ]
    },
    {
        id: 2, name: "experience", value: "", type: "text", label: "Experience", theme: "dark", placeholder: "Experience",
        select: false, justifyend: false,
    },
    {
        id: 3, name: "nationalId", value: "", type: "text", label: "National ID", theme: "dark", placeholder: "National ID", select: false, justifyend: false,
    },
    {
        id: 4, name: "religion", value: "", label: "Religion", select: true, theme: "dark",
        options: [
            {
                id: 0,
                value: "Select",
            },
            {
                id: 1,
                value: "Islam",
            },
            {
                id: 2,
                value: "Christianity",
            },
            {
                id: 3,
                value: "Non-Muslim",
            },
        ]
    },
    {
        id: 5, name: "email", type: "text", value: "", label: "Email Address", placeholder: "Email Address", select: false, justifyend: false, theme: "dark",
    },
    {
        id: 6, name: "education", type: "text", value: "", theme: "dark", label: "Education", placeholder: "Education", select: false, justifyend: false,
    },
    {
        id: 7, name: "bloodgroupp", label: "Blood Group", value: "", theme: "dark", select: true,
        options: [
            {
                id: 0,
                value: "Blood Group"
            },
            {
                id: 1,
                value: "A +"
            },
            {
                id: 2,
                value: "A -"
            },
            {
                id: 3,
                value: "B +"
            },
            {
                id: 4,
                value: "B -"
            },
            {
                id: 5,
                value: "AB +"
            },
            {
                id: 6,
                value: "AB -"
            },
        ]
    },
    {
        id: 8, name: "dob", type: "date", label: "Date of Birth", value: "", theme: "dark", select: false, justifyend: false,
    },
    {
        id: 9, select: false, justifyend: false, colSpan: true, theme: "dark", name: "address", value: "", type: "text", label: "Address", placeholder: "Home Address",
    },
];

export default EmployeeOtherInfo;
