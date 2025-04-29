import React,{useEffect , useState} from "react";
import { FaCartPlus } from "react-icons/fa6";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./productCard.css";

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
  const [isFavorite, setIsFavorite] = useState(false);
   const { t, i18n } = useTranslation();
    useEffect(() => {
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);
  
  return (
    <div className="bg-white w-full h-[260px] sm:h-[340px] sm:w-[200px] rounded-2xl shadow-md overflow-hidden p-3 flex flex-col justify-between">
  <div>
    <div className="relative">
      <img
        src={item.image}
        alt=""
        className="w-full h-28 sm:h-40 object-cover"
      />
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className={`absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition ${isFavorite ? 'animate-shake' : ''}`}
      >
        {isFavorite ? (
          <MdFavorite className="text-red-500 text-xl" />
        ) : (
          <MdFavoriteBorder className="text-gray-500 text-xl" />
        )}
      </button>
    </div>

    <p className="text-center mt-3 text-gray-500 text-[14px]">{item.name}</p>

    {/* ===== Price ===== */}
    <div className="flex flex-col items-center min-h-[50px] sm:min-h-[60px] mt-1">
      {item.offerPrice ? (
        <>
          <p className="text-red-400 text-[12px] sm:text-[14px] line-through">
            د.ع {item.price},000
          </p>
          <p className="text-black text-[14px] sm:text-[18px] font-bold">
            د.ع {item.offerPrice},000
          </p>
        </>
      ) : (
        <>
          <p className="text-black text-[14px] sm:text-[18px] font-bold">
            د.ع {item.price},000
          </p>
          {/* عنصر فارغ ليوازن الطول */}
          <span className="invisible text-[12px] sm:text-[14px]">-</span>
        </>
      )}
    </div>
  </div>

  {/*  shopping cart */}
  <Link
    to={"/product/:id"}
    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition flex items-center justify-between"
  >
    <p className="text-[12px] sm:text-sm"> {t("add-to-card")} </p>
    <FaCartPlus />
  </Link>
</div>

  );
};

export default ProductCard;
