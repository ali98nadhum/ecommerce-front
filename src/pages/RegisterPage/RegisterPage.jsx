import React,{useEffect} from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
     const { t, i18n } = useTranslation();
        useEffect(() => {
          document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
        }, [i18n.language]);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-5 mb-14">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6"> {t("create-account")} </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
