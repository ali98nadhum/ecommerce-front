import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import { useTranslation } from "react-i18next";
import SectionTitleBar from "../../components/SectionTitleBar/SectionTitleBar";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import BrandCard from "../../components/BrandCard/BrandCard";


const products = [
  {
    name: "هاتف سامسونج",
    price: "450",
    offerPrice: "200",
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    name: "سوني بلايستيشن",
    price: "600",
    image:
      "https://image.makewebeasy.net/makeweb/m_1920x0/TPguOW5od/Sony_page%2FBanner_Sony_03.jpg?v=202405291",
  },
  {
    name: "هواوي نوفا",
    price: "380",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "ايفون 15",
    price: "1,200",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    name: "ايفون 15",
    price: "1,200",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    name: "ايفون 15",
    price: "1,200",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    name: "ايفون 15",
    price: "1,200,000",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
  {
    name: "ايفون 15",
    price: "1,200,000",
    image:
      "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  },
];

const brands = [
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
  {
    name: "هواوي ",
    image:
      "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
  },
];

const HomePage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="home mb-28">
      <Container>
        <h1 className="text-2xl sm:text-3xl p-2 mt-5">{t("home")}</h1>
        {/* ===== Serach box ===== */}
        <div className="flex items-center justify-center mt-3">
          <SearchBar />
        </div>
        {/* ===== Carousel ===== */}
        <Carousel />
        {/* ===== CategoriesCard Carousel ===== */}
        <SectionTitleBar title={t("category-title")} link={"/all-category"} />
        <CardCarousel items={products} CardComponent={CategoriesCard} />
        {/* ===== Products besr siller ===== */}
        <SectionTitleBar title={t("best-seller")} link={"/best-seller"} />
        <ProductCarousel items={products} CardComponent={ProductCard} />
        {/* ===== Products besr siller ===== */}
        <SectionTitleBar title={t("Discounts")} link={"/discount-product"} />
        <ProductCarousel items={products} CardComponent={ProductCard} />
        {/* ===== Brand card ===== */}
        <SectionTitleBar title={t("Brands")} link={"/all-brands"} />
        <CardCarousel items={brands} CardComponent={BrandCard}/>
        {/* ===== New Product ===== */}
        <SectionTitleBar title={t("Latest-Products")} link={"/latest-products"} />
        <ProductCarousel items={products} CardComponent={ProductCard} />
      </Container>
    </div>
  );
};

export default HomePage;

