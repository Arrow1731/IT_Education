// Components/Footer.js
import React from "react";
import logo from '../assets/logo_color.png';
import FooterMap from '../assets/footer_map.png';

function Footer() {
  return (
    <footer className="bg-[#06306D] mt-[34px]">
      <div className="container pt-[40px] flex justify-between">
        <div>
          <img className="w-[384px] h-[224px] rounded-[12px]" src={FooterMap} alt="" />
        </div>
        <div>
          <div className="flex gap-[118px]">
            <img src={logo} alt="" />
            <h4>O‘quvchilarga</h4>
            <h4>Tadbirkorlarga</h4>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
