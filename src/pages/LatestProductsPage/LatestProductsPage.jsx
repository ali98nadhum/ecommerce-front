import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "سماعات بلوتوث",
    price: 15,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 2,
    name: "ساعة ذكية",
    price: 20,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 3,
    name: "لاب توب ديل",
    price: 2800,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 4,
    name: "هاتف سامسونج",
    price: 1300,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 5,
    name: "كاميرا رقمية",
    price: 900,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 6,
    name: "ماوس لاسلكي",
    price: 60,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 7,
    name: "لوحة مفاتيح ميكانيكية",
    price: 130000,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 8,
    name: "شاشة 24 بوصة",
    price: 700000,
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id: 9,
    name: "باور بانك 20000mAh",
    price: 80000,
    image: "https://via.placeholder.com/300x300.png?text=Power+Bank",
  },
  {
    id: 10,
    name: "سماعات أذن",
    price: 30000,
    image: "https://via.placeholder.com/300x300.png?text=Earphones",
  },
  {
    id: 11,
    name: "هاتف آيفون",
    price: 3200000,
    image: "https://via.placeholder.com/300x300.png?text=iPhone",
  },
  {
    id: 12,
    name: "مكبر صوت بلوتوث",
    price: 160000,
    image: "https://via.placeholder.com/300x300.png?text=Bluetooth+Speaker",
  },
  {
    id: 13,
    name: "قرص صلب خارجي 1TB",
    price: 230000,
    image: "https://via.placeholder.com/300x300.png?text=External+HDD",
  },
  {
    id: 14,
    name: "جهاز بلايستيشن",
    price: 2500000,
    image: "https://via.placeholder.com/300x300.png?text=PlayStation",
  },
  {
    id: 15,
    name: "جهاز تبريد لابتوب",
    price: 90000,
    image: "https://via.placeholder.com/300x300.png?text=Laptop+Cooler",
  },
  {
    id: 16,
    name: "طابعة ليزر",
    price: 600000,
    image: "https://via.placeholder.com/300x300.png?text=Laser+Printer",
  },
];

const LatestProductsPage = () => {
  const visibleProducts = products.slice(0, 8);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div className="pt-6 pb-32">
      <Container>
        <h1 className="text-[18px] sm:text-2xl">{t("best-seller")} </h1>
        <div className="pt-4 flex items-center justify-center">
          <SearchBar />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestProductsPage;
