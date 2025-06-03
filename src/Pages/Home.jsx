import React, { Component } from 'react'
import math from '../assets/math.png'
import boy from '../assets/boy.png'
import wallet from '../assets/wallet.png'
import robo from '../assets/robo.png'

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <header>
          <h1 className='text-center mt-[40px] text-[56px] font-bold text-[#222222]'>Raqamli ta’lim loyihalari</h1>
          <div className='flex justify-between bg-[#F8F8F8] rounded-[16px] mt-[40px] mb-[148px]'>
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
        <main>
          <section>
          <h1 className='text-center mt-[40px] text-[56px] font-bold text-[#222222]'>Maxsus imkoniyalar</h1>

          <div className='mt-[40px]'>
            <div className='flex justify-between mb-[24px]'>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT kompensatsiya
                ol</h3>
                <p>IT ga Sarflagan <br />
                pullaringni qaytarib ol</p>
                </span>
                <img className='w-[150px] h-[150px]' src={wallet} alt="" />
              </div>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>Maktabda IT ni
o’rgan</h3>
                <p>It sohasini o’rganishning
samarali usullari</p>
                </span>
                <img className='w-[150px] h-[150px]' src={robo} alt="" />
              </div>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT sohasida ish
va amaliyot </h3>
                <p>Mahalliy va Jahon IT
kompaniyalarida amaliyot</p>
                </span>
                <img className='w-[150px] h-[150px]' src={wallet} alt="" />
              </div>
            </div>
            <div className='flex justify-between mb-[24px]'>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>Men Frilanser
bo’lmoqchiman!</h3>
                <p>Dunyoning istalgan joyidan
istalgan IT xizmat ko’rsat</p>
                </span>
                <img className='w-[150px] h-[150px]' src={robo} alt="" />
              </div>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT kompensatsiya</h3>
                <p>IT ga Sarflagan
pullaringni qaytarib ol</p>
                </span>
                <img className='w-[150px] h-[150px]' src={wallet} alt="" />
              </div>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT kompensatsiya</h3>
                <p>IT ga Sarflagan
pullaringni qaytarib ol</p>
                </span>
                <img className='w-[150px] h-[150px]' src={robo} alt="" />
              </div>
            </div>
            <div className='flex justify-between mb-[40px]'>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT kompensatsiya</h3>
                <p>IT ga Sarflagan
pullaringni qaytarib ol</p>
                </span>
                <img className='w-[150px] h-[150px]' src={wallet} alt="" />
              </div>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT kompensatsiya</h3>
                <p>IT ga Sarflagan
pullaringni qaytarib ol</p>
                </span>
                <img className='w-[150px] h-[150px]' src={robo} alt="" />
              </div>
              <div className='max-w-[384px] w-auto flex border rounded-[12px]'>
                <span className='ml-[20px] mb-[20px]'>
                <h3 className='text-[24px] font-semibold'>IT kompensatsiya</h3>
                <p>IT ga Sarflagan
pullaringni qaytarib ol</p>
                </span>
                <img className='w-[150px] h-[150px]' src={wallet} alt="" />
              </div>
            </div>
              <div className='flex justify-center'>
            <button className='py-[8px] px-[32px] bg-[#2675EB] text-[20px] font-medium text-white rounded-[27px]'>Barchasini ko’rish</button>
              </div>
          </div>

          </section>
        </main>
      </div>
    )
  }
}
