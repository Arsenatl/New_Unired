import Image from 'next/image'
import React from 'react'

export default function HomePossibilities() {
    return (
        <section className='bg-[#F7F9FC] pt-24 mt-32'>
            <div className="container">
                <div className="row">
                    <h2 className='text-18 tracking-[0.01em] font-bold text-[#EF2B23]'>Возможности Unired</h2>
                    <h1 className='text-40 my-7'>Наше приложение в реальной жизни</h1>
                    <p className='text-18 leading-7 font-medium'>С Unired вы получите доступ к современным финансовым инструментам, которые помогут <br /> вам управлять своими деньгами проще, быстрее и безопаснее. Независимо от того, нужно ли <br /> вам отправить денежный перевод, оплатить счета или контролировать свои финансы, Unired <br /> всегда будет рядом, чтобы помочь вам в реальной жизни!</p>
                    <div className='bg-homePossibilities bg-set rounded-xl pt-60 pb-8 pl-7 my-12'>
                        <h3 className='text-[28px] leading-10 font-bold tracking-wide text-white'>На данный момент из  Узбекистана можно отправить деньги в <br /> Казахстан, Россия, Турция, Азербайджан, Армения и Таджикистан</h3>
                        <div className="flex-center gap-2">
                            <p className='text-18 font-medium tracking-wide text-white'>Узнать подробнее</p>
                            <Image
                                width={32}
                                height={32}
                                src={'/arrow-right.svg'}
                                alt='right'
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-7">
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#27AE60] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>Отправка денег из <br /> Узбекистана в СНГ и <br /> Европы</h2>
                        </div>
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#0E4CA3] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>Открытия VISA <br /> virtual </h2>
                        </div>
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#F4BA49] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>Электронныйе <br /> деньги Ucoin</h2>
                        </div>
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#F44949] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>Переводы между РУз и РФ 🇺🇿🔄🇷🇺</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
