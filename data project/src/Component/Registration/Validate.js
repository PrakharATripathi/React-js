import * as Yup from "yup";
export const signUpSchema = Yup.object({
    fname: Yup.string().trim().min(3, "Atleast 3 character").required("Required"),
    lname: Yup.string().trim().min(3, "Atleast 3 character").required("Required"),
    email: Yup.string().trim().email("Invalid Email").required("Required"),
    password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*+=!])(?!.*\s).{8,}$/, "Enter Atleast One Uppercase,Lowercase,Special Character,Number").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
});