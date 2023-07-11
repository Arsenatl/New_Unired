import Image from 'next/image'
import React from 'react'

export default function MyHomeServices() {
    return (
        <section className="container -mt-5 relative z-[-1]">
            <div className="row grid grid-cols-2 items-center gap-x-6">
                <div>
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Какие услуги можно оплатить?</h2>
                    <h1 className='text-36 mt-7 mb-5'>Через<span className='text-[#F44949]'>Unired Mobile</span>можно оплатить десятки услуг</h1>
                    <p className='text-18 font-light'>Lorem ipsum skdb lhiiwbfbhjb wifirwig gapi ie igt
                        Благодаря использованию новейших технологий и помощи наших партнеров переводы в нашей программе осуществляются очень быстро, в отличие от остальных программ</p>
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
