import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string().email("Please enter a valid email.").required("User Name Is Required."),
    password: Yup.string().required("Password Is Required."),
})