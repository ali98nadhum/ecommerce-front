import React,{useEffect} from "react";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const product = {
  name: "Casual Shoes",
  category: "Sports",
  price: 45,
  offerPrice: 80,
  rating: 4,
  image:
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
};

const ProductCard = ({item}) => {
   const { t, i18n } = useTranslation();
    useEffect(() => {
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);
  
  return (
    <div className="bg-white w-full h-[280px] sm:h-[320px] sm:w-[200px] rounded-2xl shadow-md overflow-hidden p-3  flex flex-col gap-8 sm:gap-6">
      <div>
        <div className="relative">
          <img
            src={item.image}
            alt=""
            className="w-full h-28 sm:h-40 object-cover"
          />
        </div>
        <p className="text-center my-3 text-gray-500 text-[14px]">
            {item.name} 
        </p>
        <p className="text-black text-[14px] sm:text-[18px] font-bold text-center">د.ع {item.price},000</p>
      </div>

      <Link
        to={"/product/:id"}
        className=" bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition flex items-center justify-between"
      >
        <p className="text-[12px] sm:text-sm"> {t("add-to-card")} </p>
        <FaCartPlus />
      </Link>
    </div>
  );
};

export default ProductCard;
