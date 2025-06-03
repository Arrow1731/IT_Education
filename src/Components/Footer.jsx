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
        <div className="flex gap-[118px] text-[#fff]">
          <div>
            <img src={logo} alt="" />
            <ul className="mt-[52px]">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#B7B7B7]">O‘quvchilarga</h4>
            <ul className="mt-[16px]">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#B7B7B7]">Tadbirkorlarga</h4>
            <ul className="mt-[16px]">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
