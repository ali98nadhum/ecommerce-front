import React from "react";
import loginImage from "../../assets/login-image.jpg";
import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center mb-12">
      <Container>
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md mx-auto">
          {/* ===== login image ===== */}
          <div className="flex justify-center mb-6">
            <img
              src={loginImage}
              alt="Login"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
          </div>

          {/* title*/}
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
            تسجيل الدخول
          </h1>

          {/* ===== Login Box ===== */}
          <LoginForm />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
