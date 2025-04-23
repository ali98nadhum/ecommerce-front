import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
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
    <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-10">
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
  );
};

export default Carousel;
