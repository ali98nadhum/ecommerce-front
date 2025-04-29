import React, { useState , useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";


const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const validationSchema = Yup.object({
    email: Yup.string().email(t("invalid-email")).required(t("Email-required")),
    password: Yup.string()
      .min(8, t("min-password"))
      .required(t("Password-required")),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      {/* ===== Login Box ===== */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          {/* ===== email input ===== */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
              {t("email")}
            </label>
            <Field
              name="email"
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* ===== password input ===== */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
               {t("password")}
            </label>
            <div className="relative">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className={`absolute top-2 ${i18n.language === "ar" ? "left-2" : "right-2"} cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {" "}
                {showPassword ? "👁️" : "🔒"}{" "}
              </button>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Link to={""}>
              <p className="text-[12px] text-blue-600"> {t("forget-password")} </p>{" "}
            </Link>
          </div>

          {/* ===== login btn ===== */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all"
          >
             {t("login")}
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            {t("don't-have-account")}?
            <span className="text-blue-500 hover:underline cursor-pointer">
                {t("create-account")}
            </span>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
