import React,{useState} from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.svg";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";



const Navbar = () => {
  const cartItemCount = 6;
  const [dropdownOpen , setDropdownOpen] = useState(false);
  return (
    <nav className="navbar p-2.5 h-20 w-full flex items-center shadow-md shadow-gray-400/30">
      <Container>
        <div className="flex items-center justify-between">
          <div className="left">
            <Link> <img src={logo} alt="logo" className="w-16 h-16" /> </Link>
          </div>
          <div className="center">
            <ul className="flex items-center justify-between gap-4">
              <li> <Link to={"/"} className="font-medium">المفضله</Link> </li>
              <li> <Link to={"/"} className="font-medium">طلباتي</Link> </li>
              <li> <Link to={"/"} className="font-medium">الرئيسيه</Link> </li>
            </ul>
          </div>
          <div className="right relative flex items-center justify-between gap-8">
            <Link to={"/cart"} className="relative">
              <FiShoppingCart className="text-2xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-4 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <div className="avatar relative">
            <img src={avatar} alt="" className="w-11 h-11 cursor-pointer"  onClick={() => setDropdownOpen(prev => !prev)} />
           {dropdownOpen &&(
             <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg border border-gray-200 rounded-md z-50 p-3 flex items-center justify-center flex-col">
             <Link to={""} className="flex w-40 items-center justify-between  mt-1.5">
             <p>الاعدادات</p>
             <CiSettings/>
             </Link>
             <Link to={""} className="flex w-40 items-center justify-between  mt-1.5">
             <p>تغير كلمه المرور</p>
             <MdOutlinePassword/>
             </Link>
             <Link to={""} className="flex w-40 items-center justify-between mt-1.5">
             <p>حذف الحساب</p>
             <MdDelete/>
             </Link>
            </div>
           )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
