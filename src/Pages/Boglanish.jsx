import React, { Component } from 'react'

export default class Boglanish extends Component {
  render() {
    return (
      <div>
        <div className='container flex justify-center flex-col items-center mt-[40px] mb-[40px] gap-[24px]'>
          <h2 className='text-[44px] font-bold'>Biz bilan bog‘laning</h2>
          {/* Request inputs */}

          <form action="#">
            <div>
              <label htmlFor="text">To‘liq ismingiz</label> <br />
              <input className='border-[1px] rounded-[8px] p-[12px] w-[792px] h-[48px]' type="text" id='text' placeholder='Ismingizni kiriting' required /> <br /><br />
              <label htmlFor="text">Telefon raqamingiz</label> <br />
              <input className='border-[1px] rounded-[8px] p-[12px] w-[792px] h-[48px]' type="text" id='text' placeholder='+998 90 123 45 67' required /> <br /><br />
              <label htmlFor="text">Elektron pochta</label> <br />
              <input className='border-[1px] rounded-[8px] p-[12px] w-[792px] h-[48px]' type="email" name="email" id="email" placeholder='E-pochta manzili' required /> <br /><br />
              <label htmlFor="text">Biz qanday yordam bera olamiz?</label> <br />
              <textarea className='border-[1px] rounded-[8px] p-[12px] w-[792px] h-[144px]' name="text" id="text" cols="30" rows="10" placeholder='Xabar matnini kiriting' required></textarea> <br />
              <div className='mt-[40px]'>
                <center>
                  <button className='max-w-[165px] h-[52px] bg-[#2675EB] rounded-[27px] text-[#fff] py-[12px] px-[40px]' type='submit'><a href="#">Yuborish</a></button>
                </center>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
