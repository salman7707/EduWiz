import { ExsistedButtonDataTypes } from "@/types/ExsistedButtonsDataType";
import { IoMdSearch } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";

export const ExsistedButtonData: ExsistedButtonDataTypes[] = [
    {
        id: 0,
        Icon: IoMdSearch,
        heading: "view",
        bgColor: "java",
    },
    {
        id: 1,
        Icon: RiPencilFill,
        heading: "edit",
        bgColor: "blue",
    },
    {
        id: 2,
        Icon: MdDelete,
        heading: "delete",
        bgColor: "pink",
    },
];