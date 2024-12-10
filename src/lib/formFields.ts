import { fieldsData } from "@/types/FieldsData.type";

const Studentsfields: fieldsData[] = [
    { id: 0, name: "studentName", label: "Student Name*", value:"", theme: "blues", placeholder: "Name of Student", type: "text", justifyend: false, select: false, },
    { id: 1, name: "RegistrationNo", label: "Last Registration", value:"", theme: "blues", placeholder: "Registration No", type: "text", justifyend: false, select: false },
    {
        id: 2, label: "Select Class*",
        name: "selectclass",
        value:"",
        theme: "blues",
        select: true,
        options: [
            {
                id: 0,
                value: "",
            },
            {
                id: 1,
                value: "Class1",
            },
            {
                id: 2,
                value: "Class 2",
            },
            {
                id: 3,
                value: "Class 3",
            },
            {
                id: 4,
                value: "Class 4",
            },
        ],
        justifyend: false,
    },
    { id: 3, name: "pic", theme: "dark", value:"", label: "Picture - Optional", type: "file", justifyend: false, select: false },
    { id: 4, name: "date", theme: "blues", value:"", label: "Date of Admission*", type: "date", justifyend: false, select: false },
    { id: 5, name: "discountfees", theme: "blues", value:"", label: "Discount In Fee*", type: "number", justifyend: false, select: false },
    { id: 6, name: "Mobilenum", theme: "dark", value:"", label: "Mobile No. for SMS/WhatsApp", type: "text", placeholder: "e.g +44xxxxxxxxxxx", justifyend: true, select: false },
];

export default Studentsfields;