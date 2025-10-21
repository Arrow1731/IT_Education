import React, { Component } from 'react'
import infoImg from '../../src/assets/Info_img.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <div className='max-w-[515px] w-full my-10'>
              <ul className='flex gap-[32px] text-[16px]'>
                <li><a href="#">Bosh Sahifa</a></li>
                <li><a href="#">Markaz haqida</a></li>
                <li><a href="#">Raqamli Ta’lim markazi haqida</a></li>
              </ul>
            </div>

            {/* Button Links */}

            <div className=''>
              <a href="#" className='bg-[#222222] text-[#fff] w-[147px] h-[40px] px-[32px] py-[8px] rounded-[27px] border-[1px]'>Biz haqimizda</a>
              <a href="#" className='bg-[#F8F8F8] w-[147px] h-[40px] px-[32px] py-[8px] rounded-[27px] border-[1px]'>Rahbariyat</a>
              <a href="#" className='bg-[#F8F8F8] w-[147px] h-[40px] px-[32px] py-[8px] rounded-[27px] border-[1px]'>Tuzilma</a>
              <a href="#" className='bg-[#F8F8F8] w-[147px] h-[40px] px-[32px] py-[8px] rounded-[27px] border-[1px]'>Bo’linmalar</a>
              <a href="#" className='bg-[#F8F8F8] w-[147px] h-[40px] px-[32px] py-[8px] rounded-[27px] border-[1px]'>Korrupsiyaga qarshi kurashish</a><br /><br />
              <a href="#" className='bg-[#F8F8F8] w-[147px] h-[40px] px-[32px] py-[8px] rounded-[27px] border-[1px]'>Yuqori turuvchi tashkilot</a>
            </div>

            <main>

              {/* INFO COMPANY */}

              <div className='mt-[80px]'>
                <h1 className='font-bold text-[56px]'>Biz haqimizda</h1>
                <div className='flex gap-10 mt-[40px]'>
                  <img src={infoImg} alt="" />
                  <p className='text-[20px] max-w-[588px] w-full'>Raqamli ta'limni rivojlantirish markazi vazirilik oldiga qo'ygan missiyalarga erishishda IT iqtidorlar va xususiy IT ta'limni qo'llab -quvatlash,
                    yoshlarni IT bilimini oshirishda davlat tominidan moliyalashtiriladigan dasturlarni ishlab chiqish va muvofiqlashtirish hamda aholi va davlat xizmatchilarining IT savodxonligini
                    oshirish ustida uzoq muddatli satrategik faoliyatni olib boradi.
                  </p>
                </div>
              </div>



              {/* GOALS COMPANY */}
              <section>
                <div className='mt-[120px]'>
                  <div className='flex justify-between'>
                    <h2 className='text-[44px] font-semibold max-w-[588px] w-full'>Markaz 2030 - yilga qadar quyidagi natijaga erishish ustida ish olib boradi</h2>

                    <div className=''>
                      <div className='flex gap-[24px] mb-[24px]'>
                        <div className='w-[282px] h-[192px] bg-[#E0E0E0] border-[1px] rounded-[8px] flex flex-col justify-center items-center gap-[16px] p-[5px]'>
                          <h4 className='text-[44px] font-bold'>1,000</h4>
                          <p className='text-[16px] font-semibold'>IT ta’lim markazlari soni</p>
                        </div>
                        <div className='w-[282px] h-[192px] bg-[#E0E0E0] border-[1px] rounded-[8px] flex flex-col justify-center items-center gap-[16px] p-[5px]'>
                          <h4 className='text-[44px] font-bold'>108,000</h4>
                          <p className='text-[16px] font-semibold'>IT ta’lim markazlaridagi o'quvchilar soni</p>
                        </div>
                      </div>
                      <div className='flex gap-[24px]'>
                        <div className='w-[282px] h-[192px] bg-[#E0E0E0] border-[1px] rounded-[8px] flex flex-col justify-center items-center gap-[16px] mb-[24px] p-[5px]'>
                          <h4 className='text-[44px] font-bold'>300,000</h4>
                          <p className='text-[16px] font-semibold'>Nafar yoshlarni IT da band qilish</p>
                        </div>
                        <div className='w-[282px] h-[192px] bg-[#E0E0E0] border-[1px] rounded-[8px] flex flex-col justify-center items-center gap-[16px] mb-[24px] p-[5px]'>
                          <h4 className='text-[44px] font-bold'>5 milliard</h4>
                          <p className='text-[16px] font-semibold'>IT mahsulotlar eksporti hajmini 5 milliard dollar qilish</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {/* VIDEO FROM YOUTUBE */}

              <section className='my-[120px]'>
                <iframe className='rounded-[24px]' width="1200px" height="636px" src="https://www.youtube.com/embed/6a7UyMH8H4U?si=x2jeqlHK2ewXGvKx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                {/* Text */}

                <div className='w-[792px] h-[351px] ml-[254px] mt-[43px]'>
                  <p>
                    Markaz o'z faoliyati davomida  maktab davridan boshlab yoshlarni oliy ta'lim, <br /> xususiy IT ta'lim  va ish beruvchi kompaniyalar bilan bog'lash ularni o'z qobilyatlarini <br /> aniqlash va kelajak kasblariga tayyorlash uchun kompleks dasturlarni ishlab chiqadi <br /> va amaliyotga tadbiq etadi. <br /><br /><br />

                    Biz vazirlik o'z oldiga qo'ygan bosh maqsad -- raqamlashtirish orqali insonlar <br /> hayotini yaxshilash va aholining qo’shimcha daromad topishiga ko’maklashishdan <br /> iborat missiyasiga erishishiga yoshlar o'rtasida IT ta'limni ommalashtirish orqali o'z <br /> hissamizni qo'shamiz. <br /><br /><br />

                    Biz munosib kalajakni yoshlar bilan birgalikda kodlaymiz!
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    )
  }
}