import Image from 'next/image'
import React from 'react'

export default function MyHomeServices() {
    return (
        <section className="container -mt-5 relative z-[-1]">
            <div className="row grid grid-cols-2 items-center gap-x-6">
                <div>
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Какие услуги можно оплатить?</h2>
                    <h1 className='text-36 mt-7 mb-5'>Через<span className='text-[#F44949]'>Unired Mobile</span>можно оплатить десятки услуг</h1>
                    <p className='text-18 font-light'>С Unired вы можете легко и удобно оплачивать широкий спектр услуг, включая коммунальные платежи, интернет, мобильную связь, такси, образовательные услуги и многое другое. Оптимизируйте свои финансовые операции, осуществляя платежи без лишних хлопот.</p>
                </div>
                
                    
                    <div>
                        <Image
                            width={528}
                            height={455}
                            src={'/Group 2606.svg'}
                            alt='people'
                        />
                    </div>
               
            </div>
        </section>
    )
}
