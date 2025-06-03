import React, { Component } from 'react';
import Coures_img from '../../assets/course.png';
import PDP_logo from '../../assets/pdp_logo.png';

export default class courses_list extends Component {
    render() {
        return (
            <div>
                <div className="container flex justify-between">
                    <div className='border-[2px] p-[16px]'>
                        <div className='flex justify-between'>
                            <h3>Saralash</h3>
                            <a href="#">Tozzalash</a> <hr />
                        </div>

                        <div className='mt-[16px]'>
                            <h4>Kurslar narx oralig’i</h4>
                            <input type="radio" name="" id="" />
                        </div>
                        <div className='flex justify-between'>
                            <p className='border-[1px] bg-[#F8F8F8] px-[16px] py-[8px] rounded-[8px] w-[119px] h-[40px] text-center'>2,500,000</p>
                            <p className='border-[1px] bg-[#F8F8F8] px-[16px] py-[8px] rounded-[8px] w-[119px] h-[40px] text-center'>5,000,000</p>
                        </div>
                        <div>
                            <p>O’quv markaz bo’yicha</p>
                            <input className='border-[1px] w-[250px] h-[40px] pl-[40px] rounded-[8px]' type="search" name="" id="" placeholder='O’quv markaz nomi' />

                            <div className='mt-[12px]'>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>Techno World</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>Najot ta’lim</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>Mohir dev</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    {/* <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p> <p className='ml-[80px]'>77</p> */}
                                </div>
                            </div>
                        </div>

                        <div className='mt-[24px]'>
                            <p>O’quv kurs yo’nalishi</p>
                            <input className='mt-[16px] bg-[#F8F8F8] w-[250px] h-[40px] pl-[40px] border-[1px] rounded-[8px]' type="search" name="" id="" placeholder='O’quv kurs ' />

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
                            <p>Kurslar davomiyligi</p>

                            <div className='mt-[16px]'>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>1 oygacha</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>1-3 oy</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>3-6 oy</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    <input type="checkbox" name="" id="" /> <p>6 oydan ko’p</p> 
                                </div>
                                <div className='flex gap-[8px]'>
                                    {/* <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p> <p className='ml-[80px]'>77</p> */}
                                </div>
                            </div>
                        </div>

                        <div className='mt-[24px]'>
                            <p>Kurslar formati</p>

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
                                77 ta kursni ko’rish
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="search" name="" id="" placeholder='O’quv kurs nomi' />

                            <select name="select" id="">
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

                        <div>
                            <p>Kurslar soni: 77</p>

                            <div>
                                <div>
                                    <img src={Coures_img} alt="" />
                                    <div>
                                        <img src={PDP_logo} alt="" />
                                        <p>PDP Academy</p>
                                    </div>

                                    <div>
                                        <p>Create beautiful websites from
                                            the scratch </p>
                                        <p>900,000 Uzs/oyiga</p>
                                    </div>
                                    <div>
                                        <p>Tashkent</p>
                                        <p>Tashkent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
