import React from "react";


const CategoriesCard = ({ item }) => {
  return (
    <div className="p-2">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-center text-center border border-gray-200 p-4 h-full">
        <img
          className="h-32 w-32 object-cover mb-3"
          src={item.image}
          alt={item.name}
        />
        <p className="text-xs sm:text-base font-semibold text-gray-700">{item.name}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
