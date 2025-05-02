import React from "react";
import Container from "../../components/Container/Container";

const ProductPage = () => {
  return (
    <Container>
      <div className=" h-full w-full p-2.5 mt-2">
        <h1 className="sm:text-2xl">تفاصيل المنتج</h1>
        <div className="sm:flex sm:items-center sm:justify-center flex items-center justify-center mt-8 border shadow-sm border-gray-300 rounded-md">
          <img
            src="https://www.pngitem.com/pimgs/m/134-1341836_iphone-mobile-watch-price-hd-png-download.png"
            alt=""
            className="w-60 h-60 sm:w-[50%]"
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
