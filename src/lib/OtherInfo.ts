import { fieldsData } from "@/types/FieldsDataTypes";

const OtherInfo: fieldsData[] = [
    {
        id: 0,
        label: "Date Of Birth",
        name: "dateofbirth",
        type: "date",
        theme: "dark",
        value: "",
        select: false,

    },
    {
        id: 1,
        name: "birthformId",
        value: "",
        label: "Student Birth Form ID / NIC",
        placeholder: "Student Birth Form ID / NIC",
        type: "text",
        theme: "dark",
        select: false,
    },
    {
        id: 2,
        name: "orphan",
        label: "Orphan Student",
        theme: "dark",
        value: "Select",
        select: true,
        options: [
            {
                id: 0,
                value: "Select",
            },
            {
                id: 1,
                value: "YES",
            },
            {
                id: 2,
                value: "NO",
            },
        ],
    },
    {
        id: 3,
        name: "gender",
        label: "Gender",
        value: "Gender",
        select: true,
        theme: "dark",
        options: [
            {
                id: 0,
                value: "Gender"
            },
            {
                id: 1,
                value: "Male"
            },
            {
                id: 2,
                value: "Female"
            },
        ]
    },
    {
        id: 4,
        name: "cast",
        label: "Cast",
        value: "",
        placeholder: "Cast",
        type: "text",
        theme: "dark",
    },
    {
        id: 5,
        name: "osc",
        label: "OSC",
        value: "Select",
        theme: "dark",
        select: true,
        options: [
            {
                id: 0,
                value: "Select",
            },
            {
                id: 1,
                value: "Yes",
            },
            {
                id: 2,
                value: "No",
            },
        ]
    },
    {
        id: 6,
        name: "identitymark",
        value: "",
        placeholder: "Any Identification Mark?",
        label: "Any Identification Mark?",
        theme: "dark",
        type: "text",
        select: false,
    },
    {
        id: 7,
        name: "prevschool",
        placeholder: "Previous School",
        value: "",
        theme: "dark",
        label: "Previous School",
        type: "text",
        select: false,
    },
    {
        id: 8,
        name: "religion",
        theme: "dark",
        select: true,
        label: "Religion",
        value: "Religion",
        options: [
            {
                id: 0,
                value: "Religion",
            },
            {
                id: 1,
                value: "Islam"
            },
            {
                id: 2,
                value: "Christianity"
            },
            {
                id: 3,
                value: "Non-Muslim"
            },
        ]
    },
    {
        id: 9,
        name: "bloodgroup",
        label: "Blood Group",
        theme: "dark",
        value: "",
        select: true,
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
        id: 10,
        name: "boardrollnum",
        value: "",
        label: "Previous ID / Board Roll No",
        placeholder: "Previous ID / Board Roll No",
        type: "text",
        select: false,
        theme: "dark",
    },
    {
        id: 11,
        name: "familyselect",
        label: "Select Family",
        value: "Select",
        select: true,
        theme: "dark",
        options: [
            {
                id: 0,
                value: "Select"
            },
            {
                id: 1,
                value: "UnKnown"
            },
        ]
    },
    {
        id: 12,
        theme: "dark",
        name: "disease",
        value: "",
        label: "Disease If Any?",
        placeholder: "Disease If Any?",
        select: false,
        type: "text",
    },
    {
        id: 13,
        name: "additionalnote",
        value: "",
        theme: "dark",
        label: "Any Additional Note",
        placeholder: "Any Additional Note",
        select: false,
        type: "text",
    },
    {
        id: 14,
        name: "siblings",
        theme: "dark",
        label: "Total Siblings",
        placeholder: "Total Siblings",
        select: false,
        value: "",
        type: "number",
    },
    {
        id: 15,
        name: "address",
        theme: "dark",
        label: "Address",
        placeholder: "Address",
        select: false,
        value: "",
        type: "text",
        colSpan: true,
    },
]
export default OtherInfo;