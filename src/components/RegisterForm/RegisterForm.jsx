import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const RegisterForm = () => {
    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        phone: ""
      };

      const validationSchema = Yup.object({
        name: Yup.string()
          .required("الاسم مطلوب")
          .min(6, "الاسم يجب ان يتكون من 6 احرف على الاقل")
          .max(25, "الاسم لا يمكن ان يكول اكثر من 25 حرف"),
        username: Yup.string()
          .required("اسم المستخدم مطلوب")
          .min(3, "المعرف يجب ان يتكون من 3 احرف على الاقل")
          .max(20, "المعرف لا يمكن ان يكون اطول من 20 حرف"),
        email: Yup.string()
          .email("البريد الإلكتروني غير صالح")
          .required("البريد الإلكتروني مطلوب"),
        password: Yup.string()
          .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
          .required("كلمة المرور مطلوبة"),
        phone: Yup.string()
          .matches(/^(075|077|078|079)\d{8}$/, "رقم الهاتف غير صالح")
          .required("رقم الهاتف مطلوب"),
      });


      const handleSubmit = (values) => {
        console.log(values);
      };
  return (
    <>
       <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">

              {/* الاسم */}
              <div>
                <label className="block mb-1 font-medium">الاسم الكامل</label>
                <Field
                  name="name"
                  type="text"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-4"
                />
              </div>

              {/* اسم المستخدم */}
              <div>
                <label className="block mb-1 font-medium">اسم المستخدم</label>
                <Field
                  name="username"
                  type="text"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-4"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label className="block mb-1 font-medium">البريد الإلكتروني</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-4"
                />
              </div>

              {/* كلمة المرور */}
              <div>
                <label className="block mb-1 font-medium">كلمة المرور</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-4"
                />
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="block mb-1 font-medium">رقم الهاتف</label>
                <Field
                  name="phone"
                  type="phone"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-4"
                />
              </div>

              {/* زر التسجيل */}
              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-600 text-white py-2 rounded font-semibold transition"
              >
                تسجيل
              </button>

              {/* رابط تسجيل الدخول */}
              <p className="text-center text-sm mt-4">
                لديك حساب؟{" "}
                <Link to="/login" className="text-blue-400 font-semibold hover:underline">
                  تسجيل الدخول
                </Link>
              </p>
            </Form>
          </Formik>
    </>
  )
}

export default RegisterForm
