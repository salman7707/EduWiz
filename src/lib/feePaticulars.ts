import { formFieldFeeSectionTypes } from "@/types/formFieldFeeSectionType";
const feeParticulars: formFieldFeeSectionTypes[] = [
    {
        id: 0,
        name: "feeparticularsfor",
        label: "Fee Particulars for*",
        theme: "blues",
        select: true,
        option: [
            {
                id: 0,
                value: "All Students"
            },
            {
                id: 1,
                value: "Specific Class"
            },
            {
                id: 2,
                value: "Specific Student"
            },
        ]
    },
    {
        id: 1,
        name: "monthlytutionfee",
        theme: "dark",
        label: "Particular Label*",
        placeHolder: "Monthly Tution Fee",
        type: "text",
    },
    {
        id: 2,
        name: "monthlytutionfeevalue",
        label: "Prefix Amount*",
        theme: "dark",
        placeHolder: "[FIXED]",
        type: "text",
    },
    {
        id: 3,
        label: "Particular Label*",
        name: "addmissionfee",
        theme: "blues",
        type: "text",
    },
    {
        id: 4,
        name: "addmissionfeevalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 5,
        name: "registrationfee",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 6,
        name: "registrationfeevalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 7,
        name: "artmaterial",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 8,
        name: "artmaterialvalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 9,
        name: "transport",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 10,
        name: "transportvalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 11,
        name: "books",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 12,
        name: "booksvalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 13,
        name: "uniform",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 14,
        name: "uniformvalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 15,
        name: "fine",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 16,
        name: "finevalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
    {
        id: 17,
        name: "others",
        label: "Particular Label*",
        theme: "blues",
        type: "text",
    },
    {
        id: 18,
        name: "othersvalue",
        label: "Prefix Amount*",
        theme: "blues",
        type: "number",
    },
]
export default feeParticulars;