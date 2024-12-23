import { fieldsData } from "@/types/FieldsDataTypes";

const FeeChalanClass: fieldsData[] = [
    {
        id: 0,
        name: "feemonth",
        label: "Fee Month*",
        type: "month",
        value: "2024-12",
    },
    {
        id: 1,
        name: "feedate",
        label: "Due Date*",
        type: "date",
        value: "2024-12-23",
    },
    {
        id: 2,
        name: "fineafterdate",
        label: "Fine After Due Date",
        type: "number",
        theme: "dark",
        value: "0",
    },
    {
        id: 3,
        name: "selectbank",
        label: "Select Bank*",
        select: true,
        value: "Meezan",
        options: [
            {
                id: 0,
                value: "Meezan"
            },
        ],
    },
    {
        id: 4,
        name: "search",
        type: "text",
        label: "Search Class*",
        placeholder: "Search Class",
    },

]
export default FeeChalanClass;