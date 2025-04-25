import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import flagSA from "../../assets/iraq-flag.png";
import flagUS from "../../assets/en-flag.png";

const LanguageSwitcher = () => {
  const [openLangMenu, setOpenLangMenu] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLangMenu(false);
  };

  return (
    <div className="relative ml-2">
      <MdLanguage
        className="text-2xl cursor-pointer"
        onClick={() => setOpenLangMenu((prev) => !prev)}
      />
      {openLangMenu && (
        <div className="absolute top-full mt-5 sm:mt-7 right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg w-24 sm:w-32 text-sm">
          <button
            onClick={() => changeLanguage("ar")}
            className="flex items-center w-full px-4 py-2 text-right gap-2 hover:bg-gray-100"
          >
            <img src={flagSA} alt="العربية" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>العربية</span>
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center w-full px-4 py-2 text-right gap-2 hover:bg-gray-100"
          >
            <img src={flagUS} alt="English" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
