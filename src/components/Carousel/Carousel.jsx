import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://as1.ftcdn.net/jpg/03/36/02/16/1000_F_336021608_AqJQDNtfEioWfCHLJrNbH4t13TaPfL6f.jpg",
  "https://images.samsung.com/is/image/samsung/assets/cl/home/2025/w6/BANNER-s25-P.png?imwidth=1366",
  "https://s.alicdn.com/@sc02/kf/Hc1f3c8ff3e884fbe8bdeb951cb25888br.jpg_750x750q80.jpg",
  "https://image.makewebeasy.net/makeweb/m_1920x0/TPguOW5od/Sony_page%2FBanner_Sony_03.jpg?v=202405291",
  "https://avestastorage.blob.core.windows.net/root/root/images/1318420222banner-fmc-huawei-logo.jpg"
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden mt-10">
    <div className="mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-2 sm:px-4">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  
  
  
  
  );
};

export default Carousel;
