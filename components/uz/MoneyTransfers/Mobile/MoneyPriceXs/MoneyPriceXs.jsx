import React from 'react'
import MoneyPriceBtnXs from './MoneyPriceBtnXs'

export default function MoneyPriceXs() {
  return (
    <section className='bg-[#F7F9FC] pt-16 pb-20 mb-16'>
      <div className="container">
        <h2 className="text-24-xs">Ўтказмалар нархи</h2>
        <p className="text-14-xs mt-5 mb-10">Unired Mobile орқали сиз Ўзбекистондан Россия ва МДҲ мамлакатларига картадан картага халқаро пул ўтказмаларини комиссиясиз амалга оширишингиз мумкин. “Unired”га қўшилинг ва сўмни рублга айлантириш учун камроқ пул тўланг, ўзингиз учун кўпроқ тежанг!</p>
        <div className="flex items-end gap-5">
          <div className="border-transparent border-l-[#F44949] border-[3px]  pl-5">
            <p className='text-14-xs font-normal tracking-[0.28px]'>
            картадан пул маблағларини ҳар бир муваффақиятли ечиб олиш учун <br />
              <span className='text-36-xs font-bold tracking-[0.72px] leading-[150%] my-1'>0%</span> <br />
              дан
            </p>
          </div>
          <MoneyPriceBtnXs />
        </div>
      </div>
    </section>
  )
}
