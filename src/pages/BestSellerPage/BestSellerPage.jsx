import React,{useEffect} from 'react'
import { useTranslation } from "react-i18next";

const BestSellerPage = () => {
    const { t, i18n } = useTranslation();
      useEffect(() => {
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
      }, [i18n.language]);
  return (
    <div>
      <h1 className='text-2xl sm:text-3xl p-2'>{ t("best-seller")} </h1>
    </div>
  )
}

export default BestSellerPage
