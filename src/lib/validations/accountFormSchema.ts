import * as Yup from "yup"
export const accountFormSchema = Yup.object({
    username:Yup.string().min(6).email().required("Email Is Required."),
    password:Yup.number().min(6).required("Password Is Required."),
    timezone:Yup.string().min(6).required("TimeZone Is Required."),
    currency:Yup.string().required("Currency Is Required."),
    symbol:Yup.string().required("Symbol Is Required."),
})
