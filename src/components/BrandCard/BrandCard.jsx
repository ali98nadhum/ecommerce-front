import React from 'react'
import { Link } from 'react-router-dom';

const BrandCard = ({item}) => {
    return (
        <Link to={""}>
        <div className="w-24 sm:w-44 md:w-52 h-28 sm:h-52 overflow- p-2 bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-full rounded-lg" src={item.image} alt="avatar" />
      </div>
      </Link>
      );
}

export default BrandCard
