import { fieldsData } from "@/types/FieldsDataTypes";

const accountInputs: fieldsData[] = [
    {
        id: 0,
        name: "username",
        label: "Username*",
        value: "salman@gmail.com",
        type: "text",
        theme: "blues",
        colSpan: true,
    },
    {
        id: 1,
        name: "password",
        label: "Password*",
        value: "123456",
        type: "password",
        theme: "blues",
        colSpan: true,
    },
    {
        id: 2,
        name: "timezone",
        label: "TimeZone*",
        value: "Asia/Karachi",
        theme: "blues",
        select: true,
        options: [
            {
                id: 0,
                value: "Asia/Karachi"
            },
        ],
        colSpan: true,
    },
    {
        id: 3,
        name: "currency",
        label: "Currency*",
        value: "Dollars (USD)",
        theme: "blues",
        select: true,
        options: [
            {
                id: 0,
                value: "Dollars (USD)"
            },
        ],
    },
    {
        id: 4,
        name: "symbol",
        label: "Symbol*",
        value: "$",
        type: "text",
        theme: "blues",
    },
]
export default accountInputs;