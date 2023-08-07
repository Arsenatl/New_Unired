import Image from 'next/image'
import React from 'react'

export default function PaymentsServices() {
    return (
        <section className="container mt-40">
            <div className="row">
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Какие услуги можно оплатить?</h2>
            </div>
            <div className="row grid grid-cols-2 gap-x-6 mt-6">
                <div>
                    <h1 className='text-36 mt-7 mb-5'>Оплата десятков услуг в <span className='text-[#F44949]'>Unired mobile</span></h1>
                    <p className='text-18 font-light'>С Unired Mobile вы получаете широкие возможности для оплаты различных услуг в Узбекистане. Оплачивайте коммунальные услуги, мобильную связь, такси, интернет, нотариальные услуги, игры, развлечения и многое другое - всё прямо через наше удобное приложение.</p>
                </div>
                <div className='flex flex-col items-center gap-10'>
                    <div className="flex-between gap-6 py-4 px-11 rounded bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                        <Image
                            width={48}
                            height={48}
                            src={'/note-2.svg'}
                            alt='list'
                        />
                        <p className='text-16 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, Ucell, Perfectum, Humans</p>

                    </div>
                    <div className="flex-between gap-5 py-4 pl-4 rounded pr-16 w-max bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                        <Image
                            width={36}
                            height={36}
                            src={'/note-2-blue.svg'}
                            alt='list'
                        />
                        <p className='text-[14px] leading-5 tracking-wider text-[#1C1C1C] opacity-50 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, <br /> Ucell, Perfectum, Humans</p>

                    </div>
                </div>
            </div>
        </section>
    )
}
