import React, { Component } from 'react'
import News_1 from '../assets/NEWS_IMGS/News_1.png'
import News_2 from '../assets/NEWS_IMGS/News_2.png'

export default class Yangiliklar extends Component {
  render() {
    return (
      <div>
        <div>
          <section className='container'>
            <div>
              <div className='flex justify-between gap-[24px] mt-[40px]'>
                <input className='w-[384px] h-[40px] bg-[#F8F8F8] border-[1px] rounded-[8px] pl-[40px]' type="search" name="" id="" placeholder='Izlash' />

                <select className='w-[180px] h-[40px] bg-[#E0E0E0] rounded-[8px] border-[1px] py-[8px] px-[24px] text-[16px]' name="select" id="">
                  <option value="News">So'ngi Yangiliklar</option>
                  <option value="News">So'ngi Yangiliklar</option>
                  <option value="News">So'ngi Yangiliklar</option>
                </select>
              </div>
            </div>

            {/* NEWS TEXT */}

            <h2 className='text-[44px] font-semibold mt-[40px]'>Yangiliklar</h2>

            {/* NEWS CARDS */}

            <div className='mt-[40px] flex gap-[24px] justify-between'>
              <div className='max-w-[588px] w-full'>
                <div>
                  <img src={News_1} alt="" />
                </div>
                <div>
                  <p className='text-[14px] text-[#2675EB] mt-[20px]'>20-iyul, 2024</p>
                  <h3 className='text-[24px] text-[#222222] mt-[12px]'>IT xizmatlarni online rasmiylashtirin</h3>
                  <p className='mt-[12px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                  <div className='flex items-center gap-[12px] mt-[12px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>

              <div className='max-w-[588px] w-full h-[432px] flex flex-col justify-between'>
                <div className='max-w-[588px] w-full h-[200px] flex gap-[20px] '>
                  <img src={News_2} alt="" />
                  <div>
                    <p className='text-[14px] text-[#2675EB] mt-[20px]'>19-iyul, 2024</p>
                    <h3 className='text-[18px] text-[#222222] mt-[12px]'>IT xizmatlarni online rasmiylashtirin</h3>
                    <p className='mt-[16px]'>Linear helps streamline software projects, sprints, tasks, and bu...</p>
                    <div className='flex items-center gap-[12px] mt-[12px]'>
                      <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                      <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                    </div>
                  </div>
                </div>

                <div className='max-w-[588px] w-full h-[200px] flex gap-[20px]'>
                  <img src={News_2} alt="" />
                  <div className='flex-block gap-[20px]'>
                    <p className='text-[14px] text-[#2675EB] mt-[20px]'>18-iyul, 2024</p>
                    <h3 className='text-[18px] text-[#222222] mt-[12px]'>O’zbekiston IT bozorida yangilik</h3>
                    <p className='mt-[16px]'>The rise of RESTful APIs has been met by a rise in tools for...</p>
                    <div className='flex items-center gap-[12px] mt-[12px]'>
                      <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                      <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* MAIN CARDS */}

        <section className='container'>
          <div className='flex gap-[24px] mt-[24px]'>
            <div>
              <div className='flex gap-[20px] w-[588px] h-[200px] mt-[40px]'>
                <img src={News_2} alt="" />
                <div>
                  <p className='text-[14px] text-[#2675EB]'>18-iyul, 2024</p>
                  <h2 className='mt-[8px] text-[18px] text-[#222222]'>O’zbekiston IT bozorida  yangilik</h2>
                  <p className='mt-[8px] text-[#3D3D3D]'>The rise of RESTful APIs has been met by a rise in tools...</p>
                  <div className='flex items-center gap-[12px] mt-[32px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-[20px] w-[588px] h-[200px] mt-[40px]'>
                <img src={News_2} alt="" />
                <div>
                  <p className='text-[14px] text-[#2675EB]'>18-iyul, 2024</p>
                  <h2 className='mt-[8px] text-[18px] text-[#222222]'>O’zbekiston IT bozorida  yangilik</h2>
                  <p className='mt-[8px] text-[#3D3D3D]'>The rise of RESTful APIs has been met by a rise in tools...</p>
                  <div className='flex items-center gap-[12px] mt-[32px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-[20px] w-[588px] h-[200px] mt-[40px]'>
                <img src={News_2} alt="" />
                <div>
                  <p className='text-[14px] text-[#2675EB]'>18-iyul, 2024</p>
                  <h2 className='mt-[8px] text-[18px] text-[#222222]'>O’zbekiston IT bozorida  yangilik</h2>
                  <p className='mt-[8px] text-[#3D3D3D]'>The rise of RESTful APIs has been met by a rise in tools...</p>
                  <div className='flex items-center gap-[12px] mt-[32px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-[20px] w-[588px] h-[200px] mt-[40px]'>
                <img src={News_2} alt="" />
                <div>
                  <p className='text-[14px] text-[#2675EB]'>18-iyul, 2024</p>
                  <h2 className='mt-[8px] text-[18px] text-[#222222]'>O’zbekiston IT bozorida  yangilik</h2>
                  <p className='mt-[8px] text-[#3D3D3D]'>The rise of RESTful APIs has been met by a rise in tools...</p>
                  <div className='flex items-center gap-[12px] mt-[32px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-[20px] w-[588px] h-[200px] mt-[40px]'>
                <img src={News_2} alt="" />
                <div>
                  <p className='text-[14px] text-[#2675EB]'>18-iyul, 2024</p>
                  <h2 className='mt-[8px] text-[18px] text-[#222222]'>O’zbekiston IT bozorida  yangilik</h2>
                  <p className='mt-[8px] text-[#3D3D3D]'>The rise of RESTful APIs has been met by a rise in tools...</p>
                  <div className='flex items-center gap-[12px] mt-[32px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-[20px] w-[588px] h-[200px] mt-[40px]'>
                <img src={News_2} alt="" />
                <div>
                  <p className='text-[14px] text-[#2675EB]'>18-iyul, 2024</p>
                  <h2 className='mt-[8px] text-[18px] text-[#222222]'>O’zbekiston IT bozorida  yangilik</h2>
                  <p className='mt-[8px] text-[#3D3D3D]'>The rise of RESTful APIs has been met by a rise in tools...</p>
                  <div className='flex items-center gap-[12px] mt-[32px]'>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT</p>
                    <p className='bg-[#F0F3FF] px-[16px] py-[4px] rounded-[27px] text-[12px]'>#IT Sohasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button More */}

          <center>
            <button className='bg-[#2675EB] mt-[40px] rounded-[27px] py-[12px] px-[40px]'>
              <a href="#" className='text-[#fff] text-[20px] font-medium'>Yana yuklash</a>
            </button>
          </center>
        </section>
      </div>
    )
  }
}
