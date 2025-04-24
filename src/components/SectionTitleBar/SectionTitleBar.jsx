import React, { useEffect } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SectionTitleBar = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const ArrowIcon = i18n.language === "ar" ? LuArrowLeft : LuArrowRight;

  return (
    <div className="flex items-center justify-between mt-10">
      <h1 className="text-2xl">{props.title}</h1>
      <Link to={props.link} className="flex items-center justify-center gap-1 group">
        <p className="text-blue-500">{t("more")}</p>
        <ArrowIcon className="text-blue-500 transform transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      </Link>
    </div>
  );
};

export default SectionTitleBar;
