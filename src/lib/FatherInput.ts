import { fieldsData } from "@/types/FieldsData.type";

const Fatherfields: fieldsData[] = [
    { id: 0, name: "fathername", label: "Father Name", theme: "dark", placeholder: "Father Name", type: "text", justifyend: false, select: false, },
    { id: 1, name: "fatherid", label: "Father National ID", theme: "dark", placeholder: "Father National ID", type: "text", justifyend: false, select: false },
    {
        id: 2, label: "Occupation",
        name: "occupation",
        theme: "dark",
        placeholder: "Occupation",
        type: "text",
        select: false,
        justifyend: false,
    },
    { id: 3, name: "education", theme: "dark", label: "Education", placeholder: "Education", type: "text", justifyend: false, select: false },
    { id: 4, name: "mobileno", theme: "dark", label: "Mobile No", placeholder: "Mobile No", type: "text", justifyend: false, select: false },
    { id: 5, name: "profession", theme: "dark", label: "Profession", placeholder: "Profession", type: "number", justifyend: false, select: false },
    { id: 6, name: "income", theme: "dark", label: "Income", type: "text", placeholder: "Income", justifyend: true, select: false },
];

export default Fatherfields;