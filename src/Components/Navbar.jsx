// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from '../assets/logo_color.png';
// import { Eye } from 'lucide-react';
// import { Earth } from 'lucide-react';
// // import courses_list_Link from "../Pages/Maslahatlar/courses_list";


// function Navigation() {
//   return (
//     <div>
//       <div className="bg-[#2282ff] p-3">
//         <span className="container flex gap-[11px] text-[white]">
//           <p className="font-semibold">Foydalanuvchilarga</p>
//           <p className="font-light">Hamkorlarga</p>
//           </span>
//       </div>
//       <nav className="border-b-2">
//         <div className="container py-[20px] flex justify-around items-center">
//         <NavLink exact to="/" activeClassName="active">
//           <img src={logo} alt="" />
//         </NavLink>
//         <span className="flex gap-[40px] items-center">
//           {/* <NavLink className='font-lato font-bold text-[#424551]' to="/Home" activeClassName="active">
//           Home
//           </NavLink> */}
//           {/* <NavLink className='font-lato font-bold text-[#424551]' to="/About" activeClassName="active">
//           About
//           </NavLink> */}
//           {/* <NavLink className='font-lato font-bold text-[#424551]' to="/Contact" activeClassName="active">
//           Contact
//           </NavLink> */}
//           <NavLink className='font-lato font-bold text-[#424551]' to="/Loyihalar" activeClassName="active">
//           Loyihalar
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">
//           O’quv markazlar
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/Universitet" activeClassName="active">
//           IT universitetlar
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/Yangiliklar" activeClassName="active">
//           Yangiliklar
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/Maslahatlar/courses_list_Link" activeClassName="active">

//           <select name="select" id="">
//                                 <option value="Hudud">IT-maslahatlar</option>
//                                 <option value="/Maslahatlar/courses_list">courses_list</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                                 <option value="Hudud">Hudud</option>
//                             </select>

//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/About" activeClassName="active">
//           Markaz haqida
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/Boglanish" activeClassName="active">
//           Bog’lanish
//           </NavLink>
//         </span>
//         <div className="flex gap-[8px]">
//             <span><Eye /></span>
//             <span><p>UZ</p></span>
//             <span><Earth /></span>
//           </div>

//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;
































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
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <span className="flex gap-[40px] items-center">
            <NavLink className='font-lato font-bold text-[#424551]' to="/Loyihalar">Loyihalar</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/Oquv_markazlar">O’quv markazlar</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/Universitet">IT universitetlar</NavLink>
            <NavLink className='font-lato font-bold text-[#424551]' to="/Yangiliklar">Yangiliklar</NavLink>

            <select
              name="select"
              onChange={handleSelectChange}
              className="font-lato font-bold text-[#424551]"
            >
              <option value="">IT-maslahatlar</option>
              <option value="/Maslahatlar/courses_list">Courses List</option>
              <option value="/Hudud">Hudud</option>
            </select>

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