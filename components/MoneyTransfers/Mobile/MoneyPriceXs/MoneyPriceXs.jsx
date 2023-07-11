import React from 'react'
import MoneyPriceBtnXs from './MoneyPriceBtnXs'

export default function MoneyPriceXs() {
  return (
    <section className='bg-[#F7F9FC] pt-16 pb-20 mb-16'>
      <div className="container">
        <h2 className="text-24-xs">Стоимость  перевода</h2>
        <p className="text-14-xs mt-5 mb-10">В дополнение к местным денежным переводам у нас есть возможность переводить деньги из Узбекистана в 7 стран и на данный момент принимать деньги только из России, но мы также работаем над добавлением других стран</p>
        <div className="flex items-end gap-5">
          <div className="border-transparent border-l-[#F44949] border-[3px]  pl-5">
            <p className='text-14-xs font-normal tracking-[0.28px]'>
              начинается с <br />
              <span className='text-36-xs font-bold tracking-[0.72px] leading-[150%] my-1'>0%</span> <br />
              за каждое успешное <br /> списание средств с карты
            </p>
          </div>
          <MoneyPriceBtnXs />
        </div>
      </div>
    </section>
  )
}
