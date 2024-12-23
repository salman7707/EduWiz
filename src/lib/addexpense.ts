import { addIncomeType } from "@/types/addIncomeDataTypes";

const addExpense: addIncomeType[] = [
    {
        id: 0,
        name: "date",
        type: "date",
        value: "2024-12-20"
    },
    {
        id: 1,
        name: "expensedescription",
        type: "text",
        value: "",
        placeholder: "Expense Description"
    },
    {
        id: 2,
        name: "expenseamount",
        type: "number",
        value: "",
        placeholder: "Expense Amount"
    },
]

export default addExpense;