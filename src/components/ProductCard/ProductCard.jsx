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

const ProductCard = () => {
   const { t, i18n } = useTranslation();
    useEffect(() => {
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);
  
  return (
    <div className="bg-white w-[170px] h-[320px] rounded-2xl shadow-md overflow-hidden p-3 flex flex-col justify-between">
      <div>
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeh0Gev8RT6GQWCqAFVS2UCPCZATFTI8Lu6maNH_QChfMeLoHZ33NSDobZpKjyaggxy0k&usqp=CAU"
            alt=""
            className="w-full h-40 object-cover"
          />
        </div>
        <p className="text-center my-3 text-gray-500 text-[14px]">
          بس اس ان 10 امريكي
        </p>
        <p className="text-black font-bold text-center">د.ع 15,000</p>
      </div>

      <Link
        to={"/product/:id"}
        className="mt-3 bg-blue-500 text-white text-sm py-1 px-3 rounded hover:bg-blue-600 transition flex items-center justify-between"
      >
        <p> {t("add-to-card")} </p>
        <FaCartPlus />
      </Link>
    </div>
  );
};

export default ProductCard;
