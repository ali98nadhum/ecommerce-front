import React from 'react'

const BrandCard = ({item}) => {
    return (
        <div className="w-24 sm:w-44 md:w-52 h-28 sm:h-52 overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-20 sm:h-32" src={item.image} alt="avatar" />
      </div>
      );
}

export default BrandCard
