import React from 'react'
import MoneyCountryList from './MoneyCountryList'

export default function MoneyCountry() {
  return (
    <section>
        <div className="container mt-32">
            <div className="row">
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Cтраны, в которых мы работаем</h2>
                <h1 className='text-36 mt-7 mb-5'>В настоящее время мы можем работать в странах <span className='text-[#F44949]'>азии</span> и ряд <span className='text-[#F44949]'>европейских стран</span></h1>
                <p className='text-18 font-light'>В дополнение к местным денежным переводам у нас есть возможность переводить <br /> деньги из Узбекистана в 7 стран и на данный момент принимать деньги только из <br /> России, но мы также работаем над добавлением других стран</p>
                <MoneyCountryList/>
            </div>
        </div>
    </section>
  )
}
