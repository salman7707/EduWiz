import IMAGES from "../../public/images";

interface ExsistedStudentType {
    id?: number;
    img?: string;
    name?: string;
    registerationno?: string;
}

const ExsistedStudent: ExsistedStudentType[] = [
    {
        id: 0,
        img: IMAGES.AVATAR,
        name: "salman",
        registerationno: "asfsafsa",
    },
]
export default ExsistedStudent;