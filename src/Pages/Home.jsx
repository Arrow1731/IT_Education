import React, { Component } from 'react'
import math from '../assets/math.png'
import boy from '../assets/boy.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className='container'>
          <h1 className='text-center mt-[40px] text-[56px] font-bold text-[#222222]'>Raqamli ta’lim loyihalari</h1>
          <div className='flex justify-between bg-[#F8F8F8] rounded-[16px] mb-[148px]'>
            <div className='ml-[40px] mt-[40px]'>
              <h2 className='text-[44px] font-bold text-[#2675EB]'>Al-Xorazmiy</h2>
              <p className='text-[24px] font-medium text-black max-w-[365px] w-auto mt-[36px] mb-[39px]'>IT sohasiga qiziqadigan iqtidorli
                7-11-sinf maktab o'quvchilariga BEPUL o’quv kurslari</p>
              <span className='flex items-end gap-[60px]'>
                <button className='py-[8px] px-[32px] bg-[#2675EB] text-[20px] font-medium text-white rounded-[27px]'>Batafsil</button>
                <img src={math} alt="" />
              </span>
            </div>
            <span>
            <img className='rounded-[16px]' src={boy} alt="" />
            </span>
          </div>

        </header>
      </div>
    )
  }
}
