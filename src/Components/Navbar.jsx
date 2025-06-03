import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo_color.png';
import { Eye } from 'lucide-react';
import { Earth } from 'lucide-react';


function Navigation() {
  return (
    <div>
      <div className="bg-[#2282ff] p-3">
        <span className="container flex gap-[11px] text-[white]">
          <p className="font-semibold">Foydalanuvchilarga</p>
          <p className="font-light">Hamkorlarga</p>
          </span>
      </div>
      <nav className="border-b-2">
        <div className="container py-[20px] flex justify-around items-center">
        <NavLink exact to="/" activeClassName="active">
          <img src={logo} alt="" />
        </NavLink>
        <span className="flex gap-[40px] items-center">
          <NavLink className='font-lato font-bold text-[#424551]' to="/Home" activeClassName="active">
          Home
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/About" activeClassName="active">
          About
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/Contact" activeClassName="active">
          Contact
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/Loyihalar" activeClassName="active">
          Loyihalar
          </NavLink>
          {/* <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">
          O’quv markazlar
          </NavLink> */}
          <NavLink className='font-lato font-bold text-[#424551]' to="/Universitet" activeClassName="active">
          IT universitetlar
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/Yangiliklar" activeClassName="active">
          Yangiliklar
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/Maslahatlar" activeClassName="active">
          IT-maslahatlar
          </NavLink>
          {/* <NavLink className='font-lato font-bold text-[#424551]' to="/About" activeClassName="active">
          Markaz haqida
          </NavLink> */}
          <NavLink className='font-lato font-bold text-[#424551]' to="/Boglanish" activeClassName="active">
          Bog’lanish
          </NavLink>
        </span>
        <div>
            <span><Eye /></span>
            <span><p>UZ</p></span>
            <span><Earth /></span>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navigation;