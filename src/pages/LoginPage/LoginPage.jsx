import React from 'react'
import {Formik , Field , Form} from "formik"
import * as Yup from "yup";
import logo from "../../assets/logo.png";
const LoginPage = () => {
    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string()
        .email("الاميل غير صالح")
        .required("الاميل مطلوب"),
        password: Yup.string()
        .min(8 , "الباسورد لازم يكون 8 احرف على الاقل")
        .required("يرجى ادخال الباسورد")
    })
  return (
   <div className="">
    
   </div>
  )
}

export default LoginPage



