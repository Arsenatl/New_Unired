import React from 'react'
import MoneyCountryList from './MoneyCountryList'

export default function MoneyCountry() {
  return (
    <section>
      <div className="container mt-32">
        <div className="row">
          <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Cтраны, в которых мы работаем</h2>
          <h1 className='text-36 mt-7 mb-5'>В настоящее время мы успешно работаем в различных<span className='text-[#F44949]'> странах Азии</span> и в ряде <span className='text-[#F44949]'> европейских стран.</span></h1>
          <p className='text-18 font-light'>Мы предлагаем возможность отправлять деньги из Узбекистана в 7 стран, а также принимать <br />денежные переводы из России. Наша команда активно работает над расширением списка <br /> стран-партнеров, чтобы обеспечить еще большее удобство и выбор для наших пользователей.</p>
          <MoneyCountryList />
        </div>
      </div>
    </section>
  )
}
