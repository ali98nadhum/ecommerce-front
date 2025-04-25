import React from "react";

const CategoriesCard = ({ item }) => {
  return (
    <div className="w-24 sm:w-44 md:w-52 h-28 sm:h-52 overflow-hidden bg-white rounded-lg shadow-lg">
    <img className="object-cover w-full h-20 sm:h-32" src={item.image} alt="avatar" />
    <div className="py-3 text-center">
      <a
        href="#"
        className="block text-xs sm:text-sm md:text-xl font-bold text-gray-800"
        tabIndex="0"
        role="link"
      >
        {item.name}
      </a>
    </div>
  </div>
  );
};

export default CategoriesCard;
