import Image from 'next/image'
import React from 'react'
import { generalLinks } from '../../GeneralLink/generalLinks'

async function getData() {
    const res = generalLinks
    return res
}


export default async function VisaWhyUniredXs() {
    const data = await getData()
    return (
        <section className='container mt-24'>
            <div className='flex flex-col gap-10 pr-24'>
                {
                    data.map((element, value) => {
                        return (
                            <div key={value} className='w-[250px]'>
                                <Image
                                    src={element.img}
                                    alt='icon'
                                    className='ml-[22px]'
                                />
                                <h2 className='flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr- before:mr-5 mt-4 mb-10px text-16-xs tracking-normal text-[#1C1C1C] font-bold'>{element.h2}</h2>
                                <p className='ml-[22px] text-14-xs tracking-normal font-normal'>{element.pOne} <span className='text-[#F44949]'>{element.span}</span> {element.pTwo}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
