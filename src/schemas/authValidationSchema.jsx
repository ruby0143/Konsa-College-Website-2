import * as Yup from 'yup';
import "yup-phone-lite";

export const signUpSchema = Yup.object({
    fullName : Yup.string().min(2).max(30).matches(/^[a-zA-Z ]*$/, "Name can only include letters a-z A-Z and spaces").required("Please enter your Full Name"),
    email : Yup.string().email().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email, must include @ and dot(.)").required("Please enter your Email"),
    phoneNumber: Yup.string().phone("IN","Invalid Phone Number").required("Please enter your Phone Number"),
    password : Yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Must contain at least one uppercase letter, one lowercase letter, one digit, and one special character @ $ ! % * ? &").required("Please enter your Password"),
    confirmPassword : Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("Confirm Password is required")    
})


export const logInSchema = Yup.object({
    email : Yup.string().email().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email, must include @ and dot(.)").required("Please enter your Email"),
    password : Yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Must contain at least one uppercase letter, one lowercase letter, one digit, and one special character @ $ ! % * ? &").required("Please enter your Password"),
})

export const phnoLoginSchema = Yup.object({
    phoneNumber: Yup.string().phone("IN","Invalid Phone Number").required("Please enter your Phone Number"),
})