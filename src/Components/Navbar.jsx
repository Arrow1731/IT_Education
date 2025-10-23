import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo_color.png';
import { Eye, Earth } from 'lucide-react';

function Navigation() {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      navigate(value);
    }
  };

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
        <NavLink to="/Home" activeClassName="active">
          <img src={logo} alt="" />
        </NavLink>

          <span className="flex gap-[40px] items-center">
            <NavLink className='font-lato font-bold text-[#424551]' to="/Yangiliklar">Yangiliklar</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/Loyihalar">Loyihalar</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/Oquv_markazlar">Jamoa A'zolari</NavLink>

            <select
              name="select"
              onChange={handleSelectChange}
              className="font-lato font-bold text-[#424551]"
            >
              <option value="">IT-maslahatlar</option>
              <option value="/Maslahatlar/courses_list">Courses List</option>
              <option value="/Hudud">Hudud</option>
            </select>

            <NavLink className='font-lato font-bold text-[#424551]' to="/Universitet">IT universitetlar</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/About">Markaz haqida</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/Boglanish">Bog’lanish</NavLink>
          </span>
          <div className="flex gap-[8px]">
            <Eye />
            <p>UZ</p>
            <Earth />
          </div>
        </div>
    </nav>
    </div>
  );
}

export default Navigation;