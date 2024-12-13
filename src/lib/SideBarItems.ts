import { SideBaritemstypes } from "@/types/SidebarItemsType";
import { Home, PencilRuler, Settings } from "lucide-react";
import { BsPerson } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";

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
        url: "",
        icon: Settings,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "Institute Profile",
                url: "/school_info",
            },
            {
                id: 1,
                title: "ٖٖFee Particulars",
                url: "/fee_particulars",
            },
        ],
    },
    {
        id: 2,
        title: "Classes",
        url: "",
        icon: PencilRuler,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "All Classes",
                url: "/all_classes",
            },
            {
                id: 1,
                title: "New Class",
                url: "/add_new_classes",
            },
        ],
    },
    {
        id: 3,
        title: "Students",
        url: "",
        icon: BsPerson,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "All Students",
                url: "/all_students",
            },
            {
                id: 1,
                title: "Add New",
                url: "/add_new_student",
            },
            {
                id: 2,
                title: "Admission Letter",
                url: "/admission_letter",
            },
            {
                id: 3,
                title: "Print Basic List",
                url: "/printinfo",
            },
            {
                id: 4,
                title: "Student ID Cards",
                url: "/studentid_card",
            },
        ],
    },
    {
        id: 4,
        title: "Employees",
        url: "",
        icon: TfiBag,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "Add New",
                url: "/add_new_employee"
            },
            {
                id: 1,
                title: "All Employees",
                url: "/all_employees"
            },
            {
                id: 2,
                title: "Job Letter",
                url: "/job_letter"
            },
            {
                id: 3,
                title: "Manage Login",
                url: "/employee_login"
            },
        ]
    },
];

export default SideBarItems;