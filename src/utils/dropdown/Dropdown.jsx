import React from "react";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

const Dropdown = () => {
  return (
    <div className="absolute right-0 mt-4 w-44 bg-white shadow-lg border border-gray-200 rounded-md z-50 p-3 flex items-center justify-center flex-col">
      <Link to={""} className="flex w-40 items-center justify-between  mt-1.5 hover:bg-gray-100 py-1 rounded p-1.5" dir="rtl">
        <p>الاعدادات</p>
        <CiSettings />
      </Link>
      <Link to={""} className="flex w-40 items-center justify-between  mt-1.5 hover:bg-gray-100 py-1 rounded p-1.5" dir="rtl">
        <p>تغير كلمه المرور</p>
        <MdOutlinePassword />
      </Link>
      <Link to={""} className="flex w-40 items-center justify-between mt-1.5 hover:bg-gray-100 py-1 rounded p-1.5" dir="rtl">
        <p>حذف الحساب</p>
        <MdDelete className="text-red-600" />
      </Link>
    </div>
  );
};

export default Dropdown;
