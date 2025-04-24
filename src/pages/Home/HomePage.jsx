import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import { useTranslation } from "react-i18next";
import SectionTitleBar from "../../components/SectionTitleBar/SectionTitleBar";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="home">
      <Container>
        <h1 className="text-3xl p-2 mt-5">{t("home")}</h1>
        {/* ===== Serach box ===== */}
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>
        {/* ===== Carousel ===== */}
        <Carousel />
        {/* ===== SectionTitleBar ===== */}
        <SectionTitleBar title={t("category-title")} link={"/category"} />
      </Container>
    </div>
  );
};

export default HomePage;
