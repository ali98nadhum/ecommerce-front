import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductCarousel = ({ items, CardComponent }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  

      return (
        <div className="mb-20 w-full max-w-6xl mt-10 px-4 ">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div key={idx} className="p-2">
              <CardComponent item={item} />
            </div>
          ))}
        </Slider>
      </div>
      )
}

export default ProductCarousel
