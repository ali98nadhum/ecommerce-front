import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CardCarousel = ({ items, CardComponent }) => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3500,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              rows: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              rows: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              rows: 2,
              arrows: false,
            },
          },
        ],
      };


  return (
    <div className="mb-20 w-full max-w-6xl mx-auto mt-10 px-4">
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

export default CardCarousel
