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
                    <h2 className='text-18 font-bold tracking-[0.01em] text-white'>Краткие факты</h2>
                    <h1 className='text-36 text-white my-7'>Лучшее мобильное приложение для перевода <br /> из Узбекистана в другие страны</h1>
                    <p className='text-18 tracking-normal text-white mb-24'>Unired делает перемещение денег таким же простым и удобным, как отправка сообщений. <br /> Наша команда ежегодно обрабатывает сотни миллиарды сумов для физических лиц и амбициозных <br />компаний всех размеров.</p>
                    <div className="grid grid-cols-4 gap-12">
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>50.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Загрузок</p>
                        </div>
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>50.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Пользователей</p>
                        </div>
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>50.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Активных пользователей</p>
                        </div>
                        <div>
                            <h4 className='before:content-[" "] before:block before:h-12 before:w-[2px] before:bg-[#1C1C1C] before:mr-10px before:-ml-10px flex-center text-[32px] leading-10 font-bold text-white'>50.000+</h4>
                            <p className='text-16 tracking-normal text-white font-normal opacity-70 mt-10px'>Рейтинг приложения</p>
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
