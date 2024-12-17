import { SideBaritemstypes } from "@/types/SidebarItemsType";
import { Hand, Home, PencilRuler, Settings } from "lucide-react";
import { BsPencilFill, BsPerson } from "react-icons/bs";
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
                url: "/institute_profile",
            },
            {
                id: 1,
                title: "ٖٖFee Particulars",
                url: "/fee_particulars",
            },
            {
                id: 2,
                title: "Log Out",
                url: "/",
                logoutBtn: true,
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
    {
        id: 5,
        title: "Attendance",
        url: "",
        icon: Hand,
        plusicon: true,
        insidedata: [
            {
                id: 0,
                title: "Mark Students Attendance",
                url: "/mark_student_attendance"
            },
            {
                id: 1,
                title: "Mark employee Attendance",
                url: "/mark_employee_attendance"
            },
            {
                id: 2,
                title: "Class Wise Report",
                url: "/class_wise_report"
            },
            {
                id: 3,
                title: "Students Attendance Report",
                url: "/students_attendance_report"
            },
            {
                id: 4,
                title: "Employees Attendance Report",
                url: "/employees_attendance_report"
            },
        ]
    },
    {
        id: 6,
        title: "Homework",
        url: "/homework",
        icon: BsPencilFill,
    },
];

export default SideBarItems;