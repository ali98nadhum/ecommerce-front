import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-5 mb-14">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">إنشاء حساب</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
