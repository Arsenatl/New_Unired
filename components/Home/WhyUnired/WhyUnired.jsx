import React from 'react'
import { whyUniredLink } from './whyUniredLink'
import Image from 'next/image'

async function getData() {
    const res = whyUniredLink

    return res
}

export default async function WhyUnired() {
    const data = await getData()
    return (
        <section>
            <div className="container mt-[600px] mb-[130px]">
                <div className="row">
                    <h2 className='text-18 tracking-[0.01em] font-bold text-[#EF2B23]'>Почему Unired</h2>
                    <h1 className='text-36 mt-[30px] mb-[70px]'>Лучшее мобильное приложение для перевода <b></b> из Узбекистана в другие страны</h1>
                    <div className="grid grid-cols-4 gap-[30px]">
                        {
                            data.map((element, value) => {
                                return (
                                    <div>
                                        <Image
                                            width={48}
                                            height={48}
                                            src={element.img}
                                            alt='icon'
                                        />
                                        <h3 className='text-16 flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr-5 before:-ml-5 mt-[30px] mb-2'>{element.logo}</h3>
                                        <p className='text-16 font-normal text-[#455464]'>
                                            {element.textStart}
                                           <span className='text-[#F44949] font-semibold'>{element.span}</span>
                                            {element.textFinish}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
