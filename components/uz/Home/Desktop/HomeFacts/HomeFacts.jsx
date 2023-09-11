'use client'
import Image from 'next/image';
import img from '@/public/iPhone 14 Pro Space Black Mockup.png'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function HomeFacts() {
    const [boolean, setBoolean] = useState(false);
    const onScroll = useCallback(event => {
        const { scrollY } = window;
        const res = document.querySelector('.iphoneScroll').offsetTop
        if (window.scrollY > (res-600)) {
            setBoolean(true)
        }else{
            setBoolean(false)

        }
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);

    return (
        <section className='bg-homeFacts relative pt-80 iphoneScroll overflow-hidden pb-16 mb-36 bg-[#F7F9FC] bg-set'>
            <div className="container">
                <div className="row">
                    <h2 className='text-18 font-bold tracking-[0.01em] text-white'>Қисқа фактлар</h2>
                    <h1 className='text-36 text-white my-7'>Ўзбекистондан бошқа давлатларга пул <br /> ўтказиш учун энг яхши мобил илова
                        Unired <br /> пул ўтказишни  худди хабар жўнатиш каби <br /> осон ва қулай амалга оширади.
                    </h1>
                    <p className='text-18 tracking-normal text-white mb-24'>Бизнинг жамоамиз йиллар давомида жисмоний шахслар ва барча турдаги улкан амбицияли компаниялар <br /> учун ҳам юзлаб миллиард сўмларни айланишини таъминлайди.</p>
                    <div className="grid grid-cols-4 gap-12">
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>100.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Юкламалар</p>
                        </div>
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>50.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Фойдаланувчилар</p>
                        </div>
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>45.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Фаол фойдаланувчилар</p>
                        </div>
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>150+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Ижобий изоҳлар</p>
                        </div>
                    </div>
                </div>
                <div className={`absolute top-0 right-0 duration-200 ${boolean ? '' : 'rotate-[30deg]'}`}>
                    <Image
                        src={img}
                        alt='iphone'
                    />
                </div>
            </div>
        </section>
    )
}
