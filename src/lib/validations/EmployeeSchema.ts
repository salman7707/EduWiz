import * as Yup from "yup"

export const EmployeeSchema = Yup.object({
    employeeName: Yup.string().min(6).max(12).required("Name is required."),
    mobileNo: Yup.number().min(8).required("Mobile Number Is Required."),
    employeeRole: Yup.string().required("Mobile Number Is Required."),
    picture: Yup.string().required("File is Required"),
    dateofjoining: Yup.date().required("Date is reqired."),
    monthlsalary: Yup.number().required("Salary Is Required"),
    father: Yup.string().min(6).max(12).required("Father name is Required"),
    gender: Yup.string().required("Gender is Required"),
    experience: Yup.string().required("Experience is Required"),
    nationalId: Yup.string().required("NationalId is Required"),
    religion: Yup.string().required("Religion is Required"),
    email: Yup.string().email().required("Email is Required"),
    education: Yup.string().required("Gender is Required"),
    bloodgroupp: Yup.string().required("BloodGroup is Required"),
    dob: Yup.string().required("Date Of Birth is Required"),
    address: Yup.string().required("Address is Required"),
})