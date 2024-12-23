import IMAGES from "../../public/images";
import { ExsistedStudentType } from "./ExsistedStudents";



const FeeDefaulters: ExsistedStudentType[] = [
    {
        id: 0,
        img: IMAGES.AVATAR,
        registerationno: 12345678,
        name: "salman",
        subject: "Computer",
        feepage: true,
    },
]
export default FeeDefaulters;