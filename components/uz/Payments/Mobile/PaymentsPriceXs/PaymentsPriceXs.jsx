import React from 'react'
import PaymentsPriceBtnXs from './PaymentsPriceBtnXs'

export default function PaymentsPriceXs() {
  return (
    <section className='bg-[#F7F9FC] mt-28 pt-16 pb-20 mb-16'>
      <div className="container">
        <h2 className="text-24-xs">Дарҳол тўлов</h2>
        <p className="text-14-xs mt-5 mb-10">Кечикишлар ва кутишларни унутинг - пул ўтказмалари бир зумда амалга оширилади, бу сизнинг молиянгизни самарали бошқарувини таъминлайди. Unired mobile билан хизматлар учун тўлов қилинг ва бир зумда пул юборинг!

Синаб кўринг
</p>
        <div className="flex-center gap-5">
          <div className="border-transparent border-l-[#F44949] border-[3px] pl-5">
            <p className='text-14-xs font-normal tracking-[0.28px]'>
            Пул тушиш вақти:

              <br />
              <span className='text-36-xs font-bold tracking-[0.72px] leading-[150%] my-1'>1 дақиқа</span>
            </p>
          </div>
          <PaymentsPriceBtnXs />
        </div>
      </div>
    </section>
  )
}
