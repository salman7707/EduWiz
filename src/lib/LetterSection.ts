import { admissionLetterDataType } from "@/types/AdmissionLetterDataType";
import IMAGES from "../../public/images";



const admissionletterdata: admissionLetterDataType[] = [
    {
        id: 0,
        img: IMAGES.AVATAR,
        name: "salman",
        insidedata: [
            {
                id: 0,
                key: "Registration/ID",
                value: "asfsafsa",
                bg: "dark",
            },
            {
                id: 1,
                key: "Class",
                value: "",
                bg: "transparent",
            },
            {
                id: 2,
                key: "Admission Date",
                value: "10 December, 2024",
                bg: "dark",
            },
            {
                id: 3,
                key: "Account Status",
                value: "Active",
                color: "green",
                bg: "transparent",
            },
            {
                id: 4,
                key: "Username",
                value: "98825PCjCasfsafsa",
                bg: "dark",
            },
            {
                id: 5,
                key: "Password",
                value: "98825PCjCasfsafsa",
                bg: "transparent",
            },
        ],
    },
];
export default admissionletterdata;