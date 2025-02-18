import * as Yup from "yup"

export const admisionschema = Yup.object({
    studentName: Yup.string().min(6).max(15).required("Student Name is Required"),
    RegistrationNo: Yup.string().min(8).max(18).required("Registration Number is Required"),
    selectclass: Yup.string().required("Please select at least one class.").notOneOf([""], "Please select a valid class."),
    pic: Yup.mixed().required("Select One Picture Atleast"),
    date: Yup.date().required("Select the date"),
    discountfees: Yup.number().required("Discount Fees is required"),
    Mobilenum: Yup.number().required("Mobile Number is required"),
    dateofbirth: Yup.date().required("Date Of Birth is required"),
    birthformId: Yup.number().required("Birth Form ID is required"),
    orphan: Yup.string().required("Orphan Field is required").notOneOf(["Select"], "Please Select a valid Option."),
    gender: Yup.string().required("Birth Form ID is required").notOneOf(["Gender"], "Please Select a valid Gender."),
    cast: Yup.string().min(6).max(12).required("Cast is required"),
    osc: Yup.string().required("Osc Is Required").notOneOf(["Select"], "Please Choose Correct One."),
    identitymark: Yup.string().required("Identity Mark Is Required"),
    prevschool: Yup.string().required("Previous school Is Required"),
    religion: Yup.string().required("Religion Is Required").notOneOf(["Religion"], "Select a valid religion"),
    bloodgroup: Yup.string().required("Religion Is Required").notOneOf(["Religion"], "Select a valid Blood Group"),
    familyselect: Yup.string().required("Select Family Is Required").notOneOf([""],"please select the correct one."),
    boardrollnum: Yup.string().min(6).max(12).required("Board Roll Number Is Required"),
    disease: Yup.string().min(6).max(12).required("Select Disease if any"),
    additionalnote: Yup.string().min(6).max(12).required("Please add additional note"),
    siblings: Yup.string().required("Please add Siblings."),
    address: Yup.string().min(6).max(12).required("Please add Address"),
})