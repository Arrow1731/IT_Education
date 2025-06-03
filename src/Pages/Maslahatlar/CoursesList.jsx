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
                        <div>
                            <h4>Kurslar narx oralig’i</h4>
                            <input type="radio" name="" id="" />
                        </div>
                        <div className='flex justify-between'>
                            <p className='border-[1px] bg-[#dad8d8] px-[16px] py-[8px] rounded-[8px] w-[119px] h-[40px] text-center'>2,500,000</p>
                            <p className='border-[1px] bg-[#dad8d8] px-[16px] py-[8px] rounded-[8px] w-[119px] h-[40px] text-center'>2,500,000</p>
                        </div>
                        <div>
                            <p>O’quv markaz bo’yicha</p>
                            <input className='border-[1px] w-[250px] h-[40px] px-[40px] rounded-[8px]' type="search" name="" id="" placeholder='O’quv markaz nomi' />

                            <div className='flex'>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                            </div>
                        </div>

                        <div>
                            <p>O’quv kurs yo’nalishi</p>
                            <input type="search" name="" id="" placeholder='O’quv kurs ' />

                            <div>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                                <input type="checkbox" name="" id="" /> <p>PDP ACADEMY</p>
                            </div>
                        </div>

                        <div>
                            <p>Kurslar davomiyligi</p>

                            <div>
                                <input type="checkbox" name="" id="" /> <p>1 oygacha</p>
                                <input type="checkbox" name="" id="" /> <p>1 oygacha</p>
                                <input type="checkbox" name="" id="" /> <p>1 oygacha</p>
                                <input type="checkbox" name="" id="" /> <p>1 oygacha</p>
                            </div>
                        </div>

                        <div>
                            <p>Kurslar formati</p>

                            <div>
                                <input type="checkbox" name="" id="" /> <p>Onlayn</p>
                                <input type="checkbox" name="" id="" /> <p>Onlayn</p>
                                <input type="checkbox" name="" id="" /> <p>Onlayn</p>
                                <input type="checkbox" name="" id="" /> <p>Onlayn</p>
                            </div>
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
