import React,{useEffect} from 'react'
import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import BrandCard from '../../components/BrandCard/BrandCard';

const brands = [
    {
      id: 1,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 2,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 3,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 4,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 5,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 6,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 7,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
    {
        id: 8,
      name: "هواوي ",
      image:
        "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg",
    },
  ];
const BrandsPage = () => {
     const { t, i18n } = useTranslation();
      useEffect(() => {
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
      }, [i18n.language]);
      return (
        <div className="pt-6 pb-32">
          <Container>
            <h1 className="text-[18px] sm:text-2xl">{t("category-title")} </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-6">
              {brands.map((brand) => (
                <BrandCard key={brand.id} item={brand} />
              ))}
            </div>
          </Container>
        </div>
      );
}

export default BrandsPage
