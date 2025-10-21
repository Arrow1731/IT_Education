// Components/Footer.js
import React from "react";
// import logo from '../assets/logo_color.png';
import logoFooter from '../assets/logo_footer.png';
import FooterMap from '../assets/footer_map.png';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Bot } from 'lucide-react';
import { Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#06306D] mt-[120px]">
      <div className="container pt-[40px] flex justify-between">
        <div>
          <img className="w-[384px] h-[224px] rounded-[12px]" src={FooterMap} alt="" />
        </div>
        <div className="flex gap-[118px] text-[#fff]">
          <div>
            <img src={logoFooter} alt="" />
            <ul className="mt-[52px]">
              <a className="leading-loose" href="#">
                <li>+998 71 203 03 43</li>
              </a>
              <a className="leading-loose" href="#">
                <li>education@digital.uz</li>
              </a>
              <a className="leading-loose max-w-[201px] w-full" href="#">
                <li>100164 Tashkent city, <br />
                  I.Muminov street, 4</li>
              </a>
              {/* <a href="#">
                <li>Home</li>
              </a> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#B7B7B7]">O‘quvchilarga</h4>
            <ul className="mt-[16px]">
              <a className="leading-loose" href="#">
                <li>Kurslar</li>
              </a>
              <a className="leading-loose" href="#">
                <li>IT o‘quv markazlar</li>
              </a>
              <a className="leading-loose" href="#">
                <li>Dasturlar</li>
              </a>
              <a className="leading-loose" href="#">
                <li>Biz haqimizda</li>
              </a>
              <a className="leading-loose" href="#">
                <li>Biz bilan bog‘lanish</li>
              </a>
              <a className="leading-loose" href="#">
                <li>FAQ</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#B7B7B7]">Tadbirkorlarga</h4>
            <ul className="mt-[16px]">
              <a className="leading-loose" href="#">
                <li>Biz bilan bog‘lanish</li>
              </a>
              <a className="leading-loose" href="#">
                <li>FAQ</li>
              </a>


              {/* Til - Languages */}

              <div>
                <div>
                  <h4 className="font-semibold text-[#B7B7B7]">Til</h4>
                  <ul>
                    <a className="leading-loose" href="#">
                      <li>Uzbekcha</li>
                    </a>
                    <a className="leading-loose" href="#">
                      <li>Ruscha</li>
                    </a>
                    <a className="leading-loose" href="#">
                      <li>Ingilizcha</li>
                    </a>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* @ Receive line  */}

      <div className="mt-[44px] text-[14px]">
        <hr />
        <div className="container text-[#fff] mt-[34px]">
          <div className="flex justify-between">
            <div className="flex gap-[52px]">
              <p>© 2024 MITC. All rights reserved.</p>
              <div className="flex gap-[19px]">
                <a href="#">
                  <p>Privacy Policy</p>
                </a>
                <a href="#">
                  <p>Terms of Service</p>
                </a>
                <a href="#">
                  <p>Cookies Settings</p>
                </a>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <Facebook />
              <Instagram />
              <Bot />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
