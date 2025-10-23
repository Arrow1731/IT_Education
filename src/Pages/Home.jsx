import React, { Component } from "react";
import math from "../assets/math.png";
import boy from "../assets/boy.png";
import wallet from "../assets/wallet.png";
import robo from "../assets/robo.png";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import laptop3 from "../assets/laptop3.png";
import logos from "../assets/logos.png";
import { Crown } from "lucide-react";
import cam from "../assets/Camera1.png";
import brat1 from "../assets/brat1.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="container">
          <h1 className="text-center mt-[40px] text-[56px] font-bold text-[#222222]">
            Raqamli ta’lim loyihalari
          </h1>
          <div className="flex justify-between bg-[#F8F8F8] rounded-[16px] mt-[40px] mb-[148px]">
            <div className="ml-[40px] mt-[40px]">
              <h2 className="text-[44px] font-bold text-[#2675EB]">
                Al-Xorazmiy
              </h2>
              <p className="text-[24px] font-medium text-black max-w-[365px] w-auto mt-[36px] mb-[39px]">
                IT sohasiga qiziqadigan iqtidorli 7-11-sinf maktab
                o'quvchilariga BEPUL o’quv kurslari
              </p>
              <span className="flex items-end gap-[60px]">
                <button className="py-[8px] px-[32px] bg-[#2675EB] text-[20px] font-medium text-white rounded-[27px]">
                  Batafsil
                </button>
                <img src={math} alt="" />
              </span>
            </div>
            <span>
              <img className="rounded-[16px]" src={boy} alt="" />
            </span>
          </div>
        </header>
        <main>
          <section className="container">
            <h1 className="text-center mt-[40px] text-[56px] font-bold text-[#222222]">
              Maxsus imkoniyalar
            </h1>

            <div className="mt-[40px]">
              <div className="flex justify-between mb-[24px]">
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT kompensatsiya ol
                    </h3>
                    <p>
                      IT ga Sarflagan <br />
                      pullaringni qaytarib ol
                    </p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={wallet} alt="" />
                </div>
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      Maktabda IT ni o’rgan
                    </h3>
                    <p>It sohasini o’rganishning samarali usullari</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={robo} alt="" />
                </div>
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT sohasida ish va amaliyot{" "}
                    </h3>
                    <p>Mahalliy va Jahon IT kompaniyalarida amaliyot</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={wallet} alt="" />
                </div>
              </div>
              <div className="flex justify-between mb-[24px]">
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      Men Frilanser bo’lmoqchiman!
                    </h3>
                    <p>Dunyoning istalgan joyidan istalgan IT xizmat ko’rsat</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={robo} alt="" />
                </div>
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT kompensatsiya
                    </h3>
                    <p>IT ga Sarflagan pullaringni qaytarib ol</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={wallet} alt="" />
                </div>
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT kompensatsiya
                    </h3>
                    <p>IT ga Sarflagan pullaringni qaytarib ol</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={robo} alt="" />
                </div>
              </div>
              <div className="flex justify-between mb-[40px]">
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT kompensatsiya
                    </h3>
                    <p>IT ga Sarflagan pullaringni qaytarib ol</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={wallet} alt="" />
                </div>
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT kompensatsiya
                    </h3>
                    <p>IT ga Sarflagan pullaringni qaytarib ol</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={robo} alt="" />
                </div>
                <div className="max-w-[384px] w-auto flex border rounded-[12px]">
                  <span className="ml-[20px] mb-[20px]">
                    <h3 className="text-[24px] font-semibold">
                      IT kompensatsiya
                    </h3>
                    <p>IT ga Sarflagan pullaringni qaytarib ol</p>
                  </span>
                  <img className="w-[150px] h-[150px]" src={wallet} alt="" />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="py-[8px] px-[32px] bg-[#2675EB] text-[20px] font-medium text-white rounded-[27px] mb-[120px]">
                  Barchasini ko’rish
                </button>
              </div>
            </div>
          </section>
          <section className="bg-[#F5F7FF]">
            <h1 className="text-center pt-[40px] mb-[40px] text-[44px] font-semibold text-[#222222]">
              Tadbirlar rejasi
            </h1>
            <div className="flex justify-between container">
              <div className="max-w-[384px] w-auto rounded-[12px] bg-white shadow-md">
                <img className="rounded-[12px]" src={laptop1} alt="" />
                <span>
                  <h3 className="font-medium text-[20px] mt-[16px] mb-[8px] ml-[16px]">
                    InnoWomenWeek
                  </h3>
                  <h3 className="font-semibold text-[14px] text-[#2675EB] ml-[16px]">
                    19-iyul, 2024
                  </h3>
                  <p className="text-[14px] font-normal mt-[16px] mb-[20px] ml-[16px]">
                    6 ta yo’nalish bo’yicha IT loyihalarga pullik yutuqli tanlov
                    dasturi 6 ta yo’nalish bo’yicha IT tanlov...
                  </p>
                  <button className="px-[24px] py-[8px] border border-[#222222] rounded-[27px] ml-[16px] mb-[16px]">
                    Ko’proq ko’rish
                  </button>
                </span>
              </div>
              <div className="max-w-[384px] w-auto rounded-[12px] bg-white shadow-md">
                <img className="rounded-[12px]" src={laptop2} alt="" />
                <span>
                  <h3 className="font-medium text-[20px] mt-[16px] mb-[8px] ml-[16px]">
                    InnoWomenWeek
                  </h3>
                  <h3 className="font-semibold text-[14px] text-[#2675EB] ml-[16px]">
                    19-iyul, 2024
                  </h3>
                  <p className="text-[14px] font-normal mt-[16px] mb-[20px] ml-[16px]">
                    6 ta yo’nalish bo’yicha IT loyihalarga pullik yutuqli tanlov
                    dasturi 6 ta yo’nalish bo’yicha IT tanlov...
                  </p>
                  <button className="px-[24px] py-[8px] border border-[#222222] rounded-[27px] ml-[16px] mb-[16px]">
                    Ko’proq ko’rish
                  </button>
                </span>
              </div>
              <div className="max-w-[384px] w-auto rounded-[12px] bg-white shadow-md">
                <img className="rounded-[12px]" src={laptop3} alt="" />
                <span>
                  <h3 className="font-medium text-[20px] mt-[16px] mb-[8px] ml-[16px]">
                    InnoWomenWeek
                  </h3>
                  <h3 className="font-semibold text-[14px] text-[#2675EB] ml-[16px]">
                    19-iyul, 2024
                  </h3>
                  <p className="text-[14px] font-normal mt-[16px] mb-[20px] ml-[16px]">
                    6 ta yo’nalish bo’yicha IT loyihalarga pullik yutuqli tanlov
                    dasturi 6 ta yo’nalish bo’yicha IT tanlov...
                  </p>
                  <button className="px-[24px] py-[8px] border border-[#222222] rounded-[27px] ml-[16px] mb-[16px]">
                    Ko’proq ko’rish
                  </button>
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-[40px] pb-[24px]">
              <button className="py-[8px] px-[32px] bg-[#2675EB] text-[20px] font-medium text-white rounded-[27px]">
                Barcha tadbirlar
              </button>
            </div>
          </section>

          <section className="mt-[120px] container">
            <div>
              <div className="flex gap-[24px]">
                <div className="bg-[#F8F8F8] max-w-[588px] m-auto p-[34px] rounded-[16px]">
                  <h2 className="text-[32px] font-semibold text-[#222222]">
                    Markaz raqamlarda
                  </h2>
                  <p className="font-medium text-[#222222] mt-[16px]">
                    2023-yilda rezident kompaniyalarning o‘quv kurslarini 14300
                    nafardan ziyod o‘quvchilar muvaffaqiyatli bitirdilar,
                    chiqarilgan IT-mahsulotlar soni esa 5190 dan ortiqni tashkil
                    etdi. IT Park rezident kompaniyalari 400 dan ortiq IT
                    kurslarini taklif etadilar.
                  </p>
                </div>
                <div className="w-[282px] bg-[#E3EEFF] p-[56px] rounded-[16px]">
                  <h1 className="text-[56px] font-bold text-center mb-[8px]">
                    7 <span className="text-[#2675EB]">ta</span>
                  </h1>
                  <p className="text-[20px] font-normal text-center">
                    Aktiv loyihalar
                  </p>
                </div>
                <div className="w-[282px] bg-[#E3EEFF] p-[56px] rounded-[16px]">
                  <h1 className="text-[56px] font-bold text-center mb-[8px]">
                    5,012
                  </h1>
                  <p className="text-[20px] font-normal text-center">
                    IT o’quvchilar
                  </p>
                </div>
              </div>
              <div className="flex gap-[24px] mt-[24px]">
                <div className="w-[282px] bg-[#E3EEFF] p-[56px] rounded-[16px]">
                  <h1 className="text-[56px] font-bold text-center mb-[8px]">
                    12 <span className="text-[#2675EB]">%</span>
                  </h1>
                  <p className="text-[20px] font-normal text-center">
                    Ko’rsatgich
                  </p>
                </div>
                <div className="w-[282px] bg-[#E3EEFF] p-[56px] rounded-[16px]">
                  <h1 className="text-[56px] font-bold text-center mb-[8px]">
                    4 <span className="text-[#2675EB]">%</span>
                  </h1>
                  <p className="text-[20px] font-normal text-center">
                    Ko’rsatgich
                  </p>
                </div>
                <div className="w-[282px] bg-[#E3EEFF] p-[56px] rounded-[16px]">
                  <h1 className="text-[56px] font-bold text-center mb-[8px]">
                    2 <span className="text-[#2675EB]">%</span>
                  </h1>
                  <p className="text-[20px] font-normal text-center">
                    Ko’rsatgich
                  </p>
                </div>
                <div className="w-[282px] bg-[#E3EEFF] p-[56px] rounded-[16px]">
                  <h1 className="text-[56px] font-bold text-center mb-[8px]">
                    8 <span className="text-[#2675EB]">%</span>
                  </h1>
                  <p className="text-[20px] font-normal text-center">
                    Ko’rsatgich
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-center mt-[120px]">
            <div className="relative">
              <img src={logos} alt="" />
              <button className="w-[369px] bg-[#222] h-[68px] rounded-[40px] text-[#fff] text-[32px] font-bold absolute top-[308px] left-[535px]">
                Baholashdan o’tish
              </button>
            </div>
          </section>

          {/* <section className='container'>
            <h1 className='text-center mt-[40px] text-[56px] font-bold text-[#222222]'>Top yo’nalishlar reytingi</h1>
            <div>
            <div>

            <div>
            <div>
              <span><Crown /> #1</span>
              <span>123 ta kurs</span>
            </div>
            <h3>Backend</h3>
            <p>Oylik ma’lumotlari</p>
            <div>
            <div><p>Eng kam</p>
            <p>5.3 mln</p></div>
            </div>
            </div>

            </div>
            </div>
          </section> */}
          <section className="py-12 px-6 md:px-16 bg-white container">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
              Top yo‘nalishlar reytingi
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
                <div className="absolute top-2 left-2 text-xl flex">
                  <Crown /> #1
                </div>
                <div className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  123 ta kurs
                </div>
                <h3 className="text-2xl font-semibold mt-6">Backend</h3>
                <p className="text-gray-500 mt-2">Oylik ma’lumotlari</p>

                <div className="flex justify-between mt-6">
                  <div>
                    <p className="text-gray-500 text-sm">Eng kam</p>
                    <p className="font-semibold text-lg">5.3 mln</p>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-center">
                    <p className="text-gray-500 text-sm">O‘rtacha</p>
                    <p className="font-semibold text-lg text-blue-700">
                      14.5 mln
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Eng ko‘p</p>
                    <p className="font-semibold text-lg">36.2 mln</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
                <div className="absolute top-2 left-2 text-xl flex">
                  <Crown /> #2
                </div>
                <h3 className="text-2xl font-semibold mt-6">Frontend</h3>
                <p className="text-gray-500 mt-2">Oylik ma’lumotlari</p>

                <div className="flex justify-between mt-6">
                  <div>
                    <p className="text-gray-500 text-sm">Eng kam</p>
                    <p className="font-semibold text-lg">3.8 mln</p>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-center">
                    <p className="text-gray-500 text-sm">O‘rtacha</p>
                    <p className="font-semibold text-lg text-blue-700">
                      12.7 mln
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
                <div className="absolute top-2 left-2 text-xl flex">
                  {" "}
                  <Crown /> #3
                </div>
                <h3 className="text-2xl font-semibold mt-6">Project manager</h3>
                <p className="text-gray-500 mt-2">Oylik ma’lumotlari</p>

                <div className="flex justify-between mt-6">
                  <div>
                    <p className="text-gray-500 text-sm">Eng kam</p>
                    <p className="font-semibold text-lg">3.3 mln</p>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-center">
                    <p className="text-gray-500 text-sm">O‘rtacha</p>
                    <p className="font-semibold text-lg text-blue-700">
                      11.6 mln
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <div className="border rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition">
                <img src={cam} alt="" className="w-16 h-16 mb-3" />
                <h3 className="text-xl font-semibold">Mobile</h3>
                <p className="text-gray-500 mt-1">O‘rtacha oylik</p>
                <p className="text-blue-700 font-semibold text-lg mt-1">
                  7.8 mln
                </p>
              </div>

              <div className="border rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition">
                <img src={cam} alt="" className="w-16 h-16 mb-3" />
                <h3 className="text-xl font-semibold">Design</h3>
                <p className="text-gray-500 mt-1">O‘rtacha oylik</p>
                <p className="text-blue-700 font-semibold text-lg mt-1">
                  6.7 mln
                </p>
              </div>

              <div className="border rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition">
                <img src={cam} alt="" className="w-16 h-16 mb-3" />
                <h3 className="text-xl font-semibold">SMM</h3>
                <p className="text-gray-500 mt-1">O‘rtacha oylik</p>
                <p className="text-blue-700 font-semibold text-lg mt-1">
                  5.6 mln
                </p>
              </div>

              <div className="border rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition">
                <img src={cam} alt="" className="w-16 h-16 mb-3" />
                <h3 className="text-xl font-semibold">3D animatsiya</h3>
                <p className="text-gray-500 mt-1">O‘rtacha oylik</p>
                <p className="text-blue-700 font-semibold text-lg mt-1">
                  4.5 mln
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium">
                Barchasini ko‘rish
              </button>
            </div>
          </section>

          <section className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Muvaffaqiyat tarixi
            </h2>

            <div>
              <div className="border w-[384px]">
              <img src={brat1} alt="" />
              <div>
              <h4>PDP</h4>
              <h2>Abror Jurayev</h2>
              <p>How to Become a Senior Developer During Your Student Years</p>
              <div>
                <span># Andijan</span>
                <span># FrontEnd</span>
              </div>
              </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

{
  /* <button className='py-[8px] px-[32px] bg-[#2675EB] text-[20px] font-medium text-white rounded-[27px]'>Batafsil</button> */
}
