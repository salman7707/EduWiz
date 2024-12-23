import { fieldsData } from "@/types/FieldsDataTypes";

const AddNewBankData: fieldsData[] = [
    {
        id: 0,
        name: "bankname",
        label: "Bank Name*",
        placeholder: "Your Bank Account",
        type: "text",
    },
    {
        id: 1,
        name: "branchaddress",
        label: "Bank/Branch Address*",
        placeholder: "Bank Address",
        type: "text",
    },
    {
        id: 2,
        name: "accountnumber",
        label: "Account Number*",
        placeholder: "Bank Account No",
        type: "text",
    },
    {
        id: 3,
        name: "instruction",
        label: "Instruction",
        placeholder: "Write Instructions",
        type: "text",
        theme:"dark"
    },
]

export default AddNewBankData;