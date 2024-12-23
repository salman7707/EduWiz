import IMAGES from "../../public/images";

export interface ExsistedStudentType {
    id?: number;
    img?: string;
    name?: string;
    registerationno?: string | number;
    subject?: string,
    feepage?: boolean;
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