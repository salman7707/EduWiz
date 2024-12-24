import { DashboardCardType } from "@/types/DashboardCardsType";
import IMAGES from "../../public/images";

const DashboardCard: DashboardCardType[] = [
    {
        id: 0,
        heading: "Total Students",
        icon: IMAGES.PERSON,
        number: 0,
        subheading: "This Month",
        color: "cardfirst",
        url: "/all_students",
    },
    {
        id: 1,
        heading: "Total Employees",
        icon: IMAGES.bag,
        number: 0,
        subheading: "This Month",
        color: "cardsecond",
        url: "/all_employees",
    },
    {
        id: 2,
        heading: "Revenue",
        icon: IMAGES.dollarsign,
        number: 0,
        subheading: "This Month",
        color: "pink",
        url: "/account_statement",
    },
    {
        id: 3,
        heading: "Total Profit",
        icon: IMAGES.dollarsign,
        number: 0,
        subheading: "This Month",
        color: "cardfourth",
        url: "/account_statement",
    },
]

export default DashboardCard;