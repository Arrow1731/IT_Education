import React, { Component } from 'react'
import Coures_img from '../assets/course.png';
import PDP_logo from '../assets/pdp_logo.png';

export default class Universitet extends Component {
  render() {
    return (
      <div>
        <div className="container flex gap-[24px] mt-[40px] mb-[40px]">
          <div className='border-[2px] rounded-[8px] p-[16px] h-[605px]'>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Saralash</h3>
              <a href="#">Tozzalash</a> <hr />
            </div>

            <div className='mt-[24px]'>
              <p className='font-medium'>IT yo’nalishi</p>
              <input className='mt-[16px] bg-[#F8F8F8] w-[250px] h-[40px] pl-[40px] border-[1px] rounded-[8px]' type="search" name="" id="" placeholder="Yo'nalish" />

              <div className='mt-[12px]'>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Dizayn</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Frontend</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Backend</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Project managment</p>
                </div>
                <div className='flex gap-[8px]'>
                  {/* <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p> <p className='ml-[80px]'>77</p> */}
                </div>
              </div>
            </div>

            <div className='mt-[24px]'>
              <p className='font-medium'>O’qish davomiyligi</p>

              <div className='mt-[16px]'>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>3 yil</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>4 yil</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>4 yildan ko’p</p>
                </div>
              </div>
            </div>

            <div className='mt-[24px]'>
              <p className='font-medium'>O’qish formati</p>

              <div className='mt-[16px]'>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Onlayn</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Oflayn</p>
                </div>
                <div className='flex gap-[8px]'>
                  <input type="checkbox" name="" id="" /> <p>Gibrid</p>
                </div>
              </div>
            </div>
            <div className='mt-[16px]'>
              <button className='w-[250px] h-[40px] bg-[#2675EB] rounded-[8px] text-[#fff]'>
                <a href="#"></a>
                3 ta Universitetni ko’rish
              </button>
            </div>
          </div>
          {/* Courses Part */}
          <div>
            <div className='flex gap-[24px]'>
              <input className='w-[690px] h-[40px] bg-[#F8F8F8] border-[1px] rounded-[8px] pl-[40px]' type="search" name="" id="" placeholder='O’quv kurs nomi' />

              <select className='w-[180px] h-[40px] bg-[#E0E0E0] rounded-[8px] border-[1px] px-[8px] pl-[24px]' name="select" id="">
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
                <option value="Hudud">Hudud</option>
              </select>
            </div>

            <div className='mt-[20px]'>
              <p className='text-[28px]'>Universitetlar soni: 77</p>

              <div className='mt-[16px]'>
                <div className='flex gap-[24px]'>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex gap-[24px] mt-[24px]'>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                  {/* <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex gap-[24px] mt-[24px]'>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[282px] h-[372px] rounded-[8px] bg-[#E0E0E0]'>
                    <img className='rounded-[8px]' src={Coures_img} alt="" />
                    <div className='p-[16px]'>
                      <div className='flex gap-[8px] mt-[16px]'>
                        <img src={PDP_logo} alt="" />
                        <p className='text-[14px]'>PDP Academy</p>
                      </div>

                      <div className='mt-[12px]'>
                        <p className='font-semibold'>Create beautiful websites from
                          the scratch </p>
                        <p className='font-semibold text-[#2675EB] mt-[12px]'>ICE, ICE, ICE, ICE, ICE, ICE, ICE</p>
                      </div>
                      <div className='font-medium text-[12px] flex gap-[18px] mt-[16px]'>
                        <p>Icon</p>
                        <p><a href="#">+998 70 200 00 00</a></p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
