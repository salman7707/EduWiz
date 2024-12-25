import { ExsistedButtonDataTypes } from "@/types/ExsistedButtonsDataType";
import { IoCall } from "react-icons/io5";
import { TfiDownload } from "react-icons/tfi";

const ExsistedFeeButtonData: ExsistedButtonDataTypes[] = [
    {
        id: 0,
        Icon: TfiDownload,
        bgColor: "pink",
        heading: "Submit Fee Now",
        value:"Submit"
    },
    {
        id: 1,
        Icon: IoCall,
        bgColor: "blue",
        heading: "Call",
    },
];
export default ExsistedFeeButtonData;