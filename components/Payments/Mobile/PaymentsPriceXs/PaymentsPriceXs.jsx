import React from 'react'
import PaymentsPriceBtnXs from './PaymentsPriceBtnXs'

export default function PaymentsPriceXs() {
  return (
    <section className='bg-[#F7F9FC] pt-16 pb-20 mb-16'>
      <div className="container">
        <h2 className="text-24-xs">Моментальный платеж</h2>
        <p className="text-14-xs mt-5 mb-10">В дополнение к местным денежным переводам у нас есть возможность переводить деньги из Узбекистана в 7 стран и на данный момент принимать деньги только из России, но мы также работаем над добавлением других стран</p>
        <div className="flex-center gap-5">
          <div className="border-transparent border-l-[#F44949] border-[3px] pl-5">
            <p className='text-14-xs font-normal tracking-[0.28px]'>
              <br />
              <span className='text-36-xs font-bold tracking-[0.72px] leading-[150%] my-1'>1 минута</span>
            </p>
          </div>
          <PaymentsPriceBtnXs />
        </div>
      </div>
    </section>
  )
}
