import * as Yup from "yup"

export const addClassesschema = Yup.object({
    className: Yup.string().min(4).max(12).required("Class Name is required."),
    monthlytutionfee: Yup.number().required("Monthly Tution Fee is required."),
    selectteacher: Yup.string().min(4).max(12).required("Class Teacher is required."),
})