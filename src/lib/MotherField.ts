import { fieldsData } from "@/types/FieldsDataTypes";

const Motherfields: fieldsData[] = [
    { id: 0, name: "mothername", label: "Mother Name", theme: "dark", placeholder: "Mother Name", type: "text", justifyend: false, select: false, },
    { id: 1, name: "motherid", label: "Mother National ID", theme: "dark", placeholder: "Mother National ID", type: "text", justifyend: false, select: false },
    {
        id: 2, label: "Occupation",
        name: "motheroccupation",
        theme: "dark",
        placeholder: "Occupation",
        type: "text",
        select: false,
        justifyend: false,
    },
    { id: 3, theme: "dark", name: "mothereducation", label: "Education", placeholder: "Education", type: "text", justifyend: false, select: false },
    { id: 4, theme: "dark", name: "mothermobileno", label: "Mobile No", placeholder: "Mobile No", type: "text", justifyend: false, select: false },
    { id: 5, theme: "dark", name: "motherprofession", label: "Profession", placeholder: "Profession", type: "text", justifyend: false, select: false },
    { id: 6, theme: "dark", name: "motherincome", label: "Income", type: "number", placeholder: "Income", justifyend: true, select: false },
];

export default Motherfields;