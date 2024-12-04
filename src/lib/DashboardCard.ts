import { DashboardCardType } from "@/types/DashboardCardsType";
import IMAGES from "../../public/images";

const DashboardCard: DashboardCardType[] = [
    {
        id: 0,
        heading: "Total Students",
        icon: IMAGES.PERSON,
        number: 0,
        subheading: "This Month",
        color: "cardfirst"
    },
    {
        id: 1,
        heading: "Total Employees",
        icon: IMAGES.bag,
        number: 0,
        subheading: "This Month",
        color: "cardsecond",
    },
    {
        id: 2,
        heading: "Revenue",
        icon: IMAGES.dollarsign,
        number: 0,
        subheading: "This Month",
        color: "pink",
    },
    {
        id: 3,
        heading: "Total Profit",
        icon: IMAGES.dollarsign,
        number: 0,
        subheading: "This Month",
        color: "cardfourth",
    },
]

export default DashboardCard;