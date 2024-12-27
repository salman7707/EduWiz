import * as Yup from "yup";

export const signUpSchema = Yup.object().shape( {
    email:Yup.string().email("Please enter a valid email.").required("Email Is Required."),
    password:Yup.string().min(6).max(12).required("Password Is Required."),
} )