import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";



const products = [
  {
    id:1,
    name: "هاتف سامسونج",
    price: "450",
    offerPrice: "200",
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    id:2,
    name: "سوني بلايستيشن",
    price: "600",
    image:
      "https://image.makewebeasy.net/makeweb/m_1920x0/TPguOW5od/Sony_page%2FBanner_Sony_03.jpg?v=202405291",
  },
  {
    id:3,
    name: "هواوي نوفا",
    price: "380",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    id:4,
    name: "ايفون 15",
    price: "1,200",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    id:5,
    name: "ايفون 15",
    price: "1,200",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    id:6,
    name: "ايفون 15",
    price: "1,200",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    id:7,
    name: "ايفون 15",
    price: "1,200,000",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    id:8,
    name: "ايفون 15",
    price: "1,200,000",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
];
const CategoryPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div className="pt-6 pb-32">
      <Container>
        <h1 className="text-[18px] sm:text-2xl">{t("category-title")} </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-6">
          {products.map((category) => (
            <CategoriesCard key={category.id} item={category} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
