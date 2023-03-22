import * as Yup from 'yup';
import "yup-phone-lite";

export const signUpSchema = Yup.object({
    fullName : Yup.string().min(2).max(30).required("Please enter your Full Name"),
    email : Yup.string().email().required("Please enter your Email"),
    phoneNumber: Yup.string().phone("IN","Invalid Phone Number").required("Please enter your Phone Number"),
    password : Yup.string().min(8).required("Please enter your Password"),
    confirmPassword : Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")    
})