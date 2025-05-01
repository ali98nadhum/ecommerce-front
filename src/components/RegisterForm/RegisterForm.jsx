import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t("Name-required"))
      .min(6, t("min-name"))
      .max(25, t("max-name")),
    username: Yup.string()
      .required(t("Username-required"))
      .min(3, t("min-username"))
      .max(20, t("max-username")),
    email: Yup.string().email(t("invalid-email")).required(t("Email-required")),
    password: Yup.string()
      .min(8, t("min-password"))
      .required(t("Password-required")),
    phone: Yup.string()
      .matches(/^(075|077|078|079)\d{8}$/, t("invalid-phone"))
      .required(t("phone-required")),
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
          {/* Name input */}
          <div>
            <label className="block mb-1 font-medium"> {t("full-name")} </label>
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

          {/* Username input  */}
          <div>
            <label className="block mb-1 font-medium"> {t("username")} </label>
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

          {/* Email input  */}
          <div>
            <label className="block mb-1 font-medium"> {t("email")} </label>
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

          {/* Password input  */}
          <div>
            <label className="block mb-1 font-medium"> {t("password")} </label>
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

          {/* phone number input  */}
          <div>
            <label className="block mb-1 font-medium"> {t("phone")} </label>
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

          {/* Register btn  */}
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-600 text-white py-2 rounded font-semibold transition"
          >
            {t("register")}
          </button>

          <p className="text-center text-sm mt-4">
            {t("have-account")}
            <Link
              to="/login"
              className="text-blue-400 font-semibold hover:underline mx-2"
            >
              {t("login")}
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
