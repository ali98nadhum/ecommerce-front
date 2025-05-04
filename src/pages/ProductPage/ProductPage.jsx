import React from "react";
import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";

const products = [
  {
    name: "هاتف سامسونج",
    price: "450",
    offerPrice: "200",
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    name: "هاتف سامسونج",
    price: "450",
    offerPrice: "200",
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    name: "هاتف سامسونج",
    price: "450",
    offerPrice: "200",
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
  {
    name: "هاتف سامسونج",
    price: "450",
    offerPrice: "200",
    image:
      "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  },
];

const ProductPage = () => {
  return (
    <Container>
      <div className=" h-full w-full p-2.5 mt-2 mb-24">
        <h1 className="sm:text-2xl">تفاصيل المنتج</h1>
        <div className="sm:flex sm:items-center sm:justify-center flex items-center justify-center mt-8 border shadow-sm border-gray-300 rounded-md">
          <img
            src="https://www.pngitem.com/pimgs/m/134-1341836_iphone-mobile-watch-price-hd-png-download.png"
            alt=""
            className="w-full max-w-xs sm:w-32 object-contain"
          />
        </div>
        <h1 className="mt-4 text-[18px]">مايك يو ام فور</h1>
        <p className="text-blue-400 mt-4 text-[20px] font-bold">20.000 د.ع</p>
        <p className="mt-4 text-[14px] font-bold text-gray-400">وصف المنتج</p>
        <p className="p-2 text-[14px] mt-3">
          ميكروفون مرن متعجج الاستعمالات يمكن استعماله لاجهزه عده وتشغيله على
          الحاسوب و بلي ستيشين و اكس بوكس وكل شي ببالك يلا اطلبه هسه{" "}
        </p>
        <p className="mt-6 text-[18px] font-bold">منتجات مشابه</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
