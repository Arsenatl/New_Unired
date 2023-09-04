import React from 'react'
import MoneyCountryList from './MoneyCountryList'

export default function MoneyCountry() {
  return (
    <section>
      <div className="container mt-32">
        <div className="row">
          <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Биз фаолият кўрсатаётган мамлакатлар
</h2>
          <h1 className='text-36 mt-7 mb-5'>Ҳозирда<span className='text-[#F44949]'> Осиё</span> ва <span className='text-[#F44949]'> Европанинг</span> бир қанча  <br />мамлакатларида муваффақиятли фаолият юритмоқдамиз.</h1>
          <p className='text-18 font-light'>Биз Ўзбекистондан 7 давлатга пул жўнатиш, шунингдек, Россиядан пул ўтказмаларини қабул <br />қилиш имкониятини таклиф қиламиз. Бизнинг жамоамиз фойдаланувчиларимиз учун янада <br /> қулайлик ва танловни таъминлаш учун ҳамкор давлатлар рўйхатини кенгайтириш устида фаол ишламоқда.</p>
          <MoneyCountryList />
        </div>
      </div>
    </section>
  )
}
    