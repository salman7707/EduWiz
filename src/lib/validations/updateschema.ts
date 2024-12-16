import * as Yup from "yup"
export const updateSchema = Yup.object({
    logo: Yup.mixed().required("Logo is required"),
    phoneno: Yup.number().min(10).required("Phone No Is required."),
    website: Yup.mixed().required("Website is required."),
    address: Yup.string().min(6).required("Address is required."),
    country: Yup.string().required("Country Is required").notOneOf([""], "Please Select the correct one."),
    nameofinstitute: Yup.string().min(6).required("Institution Name Is required"),
    targetline: Yup.string().min(6).required("target Line Is required"),
})