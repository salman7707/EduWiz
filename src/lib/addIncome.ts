import { addIncomeType } from "@/types/addIncomeDataTypes";

const addIncome: addIncomeType[] = [
    {
        id: 0,
        name: "date",
        type: "date",
        value: "2024-12-20"
    },
    {
        id: 1,
        name: "incomedescription",
        type: "text",
        value: "",
        placeholder: "Income Description"
    },
    {
        id: 2,
        name: "incomeamount",
        type: "number",
        value: "",
        placeholder: "Income Amount"
    },
]

export default addIncome;