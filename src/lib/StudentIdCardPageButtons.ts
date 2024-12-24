interface StudentIdCardPageButtonsType {
    id: number;
    text: string;
    transparent?: boolean;
}
const AllStudentsButtonSection: StudentIdCardPageButtonsType[] = [
    {
        id: 0,
        text: "Default",
    },
    {
        id: 1,
        text: "Style 1",
    },
    {
        id: 2,
        text: "Style 2",
        transparent: true,
    },
    {
        id: 3,
        text: "Style 3",
        transparent: true,
    },
    {
        id: 4,
        text: "Style 4",
        transparent: true,
    },
];
export default AllStudentsButtonSection;