import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginImage from '../../assets/login-image.jpg';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('الاميل غير صالح')
      .required('الاميل مطلوب'),
    password: Yup.string()
      .min(8, 'الباسورد لازم يكون 8 احرف على الاقل')
      .required('يرجى ادخال الباسورد'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center mb-12">
      <Container>
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md mx-auto">
          {/* ===== login image ===== */}
          <div className="flex justify-center mb-6">
            <img src={loginImage} alt="Login" className="w-32 h-32 object-cover rounded-full shadow-md" />
          </div>

          {/* عنوان */}
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">تسجيل الدخول</h1>

          {/* ===== Login Box ===== */}
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className="space-y-6">

              {/* ===== email input ===== */}
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
                  البريد الإلكتروني
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* ===== password input ===== */}
              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">
                  كلمة المرور
                </label>
               <div className="relative">
               <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button type='button' className='absolute top-2 left-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}> {showPassword ?  "👁️" : "🔒"} </button>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
               </div>
              </div>

              <div className="flex items-center justify-end">
              <Link to={""}> <p className='text-[12px] text-blue-600'>نسيت كلمه المرور</p> </Link>
              </div>

              {/* ===== login btn ===== */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all"
              >
                تسجيل الدخول
              </button>

            
              <div className="text-center text-sm text-gray-500 mt-4">
                ليس لديك حساب؟ <span className="text-blue-500 hover:underline cursor-pointer">إنشاء حساب</span>
              </div>

            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
