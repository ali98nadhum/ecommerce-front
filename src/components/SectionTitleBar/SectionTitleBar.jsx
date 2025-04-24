import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";



const SectionTitleBar = (props) => {
  return (
    <div className="flex items-center justify-between mt-10">
  <h1 className="text-2xl">{props.title}</h1>
  <Link to={props.link} className="flex items-center justify-center gap-1 group">
    <p className="text-blue-500">المزيد</p>
    <LuArrowLeft className="text-blue-500 transform transition-transform duration-300 group-hover:-translate-x-1" />
  </Link>
</div>
  )
}

export default SectionTitleBar
