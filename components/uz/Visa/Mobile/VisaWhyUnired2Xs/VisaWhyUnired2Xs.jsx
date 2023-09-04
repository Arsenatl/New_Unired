import Image from 'next/image'
import React from 'react'
import { VisaWhyUniredLinks2Xs } from './VisaWhyUniredLinks2Xs'

async function getData() {
    const res = VisaWhyUniredLinks2Xs
    return res
}


export default async function VisaWhyUnired2Xs() {
    const data = await getData()
    return (
        <section className='mt-24 pt-14 pb-16 mb-20 bg-[#F7F9FC]'>
            <div className="container">

                <h2 className="text-16-xs text-[#EF2B23]">Бу қандай ишлайди</h2>
                <h3 className="text-24-xs mt-5 mb-12">VISA карталаридан осон <br /> ва тез фойдаланинг</h3>
                <div className='flex flex-col gap-10 pr-24'>
                    {
                        data.map((element, value) => {
                            return (
                                <div key={value} className='w-[250px]'>
                                    <div className='w-8 h-8 bg-[#F4494966] flex-center justify-center rounded-[50%] ml-5 text-18-xs font-semibold text-[#F44949]'>{element.id}</div>
                                    <h2 className='flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr- before:mr-5 mt-4 mb-10px text-16-xs tracking-normal text-[#1C1C1C] font-bold'>{element.h2}</h2>
                                    <p className='ml-[22px] text-14-xs tracking-normal font-normal'>{element.pOne} <span className='text-[#F44949]'>{element.span}</span> {element.pTwo}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
