import * as Yup from "yup"

export const feeparticularSchema = Yup.object({
    addmissionfeevalue: Yup.number().required("Addmission Fee Is Required."),
    registrationfeevalue: Yup.number().required("Registration Fee Is Required."),
    artmaterialvalue: Yup.number().required("Art Material Fee Is Required."),
    transportvalue: Yup.number().required("Transport Fee Is Required."),
    booksvalue: Yup.number().required("Books Fee Is Required."),
    uniformvalue: Yup.number().required("Uniform Fee Is Required."),
    finevalue: Yup.number().required("Fine Fee Is Required."),
    othersvalue: Yup.number().required("Other Fee Is Required."),
}) 
