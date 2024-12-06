import { SideBaritemstypes } from "@/types/SidebarItemsType";
import { Home, PencilRuler, Settings } from "lucide-react";
import { BsPerson } from "react-icons/bs";

const SideBarItems: SideBaritemstypes[] = [
    {
        id: 0,
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        id: 1,
        title: "General Settings",
        url: "/generalsetting",
        icon: Settings,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "Institute Profile",
                url: "/schoolinfo",
            },
            {
                id: 1,
                title: "ٖٖFee Particulars",
                url: "/feeparticulars",
            },
        ],
    },
    {
        id: 2,
        title: "Classes",
        url: "#",
        icon: PencilRuler,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "All Classes",
                url: "/allclasses",
            },
            {
                id: 1,
                title: "New Class",
                url: "/addnewclasses",
            },
        ],
    },
    {
        id: 3,
        title: "Students",
        url: "/students",
        icon: BsPerson,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "All Students",
                url: "/allstudents",
            },
            {
                id: 1,
                title: "Add New",
                url: "/addnew",
            },
        ],
    },
    {
        id: 4,
        title: "Settings",
        url: "#",
        icon: Settings,
        plusicon: false,
    },
];

export default SideBarItems;