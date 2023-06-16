import Image from 'next/image'
import React from 'react'
import ButtonHomeFinances from './ButtonHomeFinances'

export default function HomeFinances() {
    return (
        <main className=' bg-[#F7F9FC] pb-[1px]'>
            <div className="container my-[70px] py-[150px]">
                <div className="row">
                    <div className="flex-between">
                        <div>
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>Переводы</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Денежные переводы из <br /> России в Узбекистан</h1>
                            <p className='text-18 mb-5'>Чтобы осуществлять удобные и легкие <br /> денежные переводы из России в Узбекистан <br /> просто скачайте наше приложение.</p>

                            <ButtonHomeFinances logo='онлайн в другие страны' span='Переводы' />
                            <p className='text-18 mt-10'>
                                Вы можете осуществлять денежные переводы <br /> во многие страны
                                <span className='font-semibold text-[#EF2B23]'>СНГ</span>
                                и
                                <span className='font-semibold text-[#EF2B23]'>европы</span>
                            </p>
                        </div>
                        <Image
                            width={600}
                            height={600}
                            src={'/Group 2532.svg'}
                            alt='phone'
                        />
                    </div>
                    <div className="flex-between my-[200px]">
                        <div>
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>Платежи</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Плати за услуги из <br /> России в Узбекистан</h1>
                            <p className='text-18 mb-5'>Чтобы осуществлять удобные и легкие <br /> денежные переводы из России в Узбекистан <br /> просто скачайте наше приложение.</p>

                            <ButtonHomeFinances logo='платежи за услуги' span='Онлайн ' />
                            <p className='text-18 mt-10'>
                                Вы можете осуществлять платежи за интернет, <br /> игры, такси, образования, коммунальные услуги <br /> и многое другое
                            </p>
                        </div>
                        <Image
                            width={600}
                            height={600}
                            src={'/Group 2531.svg'}
                            alt='phone'
                        />
                    </div>
                    <div className="flex-between">
                        <div>
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>UCOIN</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Плати за услуги из <br /> России в Узбекистан</h1>
                            <p className='text-18 mb-5'>Чтобы осуществлять удобные и легкие <br /> денежные переводы из России в Узбекистан <br /> просто скачайте наше приложение.</p>

                            <ButtonHomeFinances logo='электронный кошелёк' span='UCOIN' />
                            <p className='text-18 mt-10'>
                                Вы можете осуществлять платежи за интернет, <br /> игры, такси, образования, коммунальные услуги <br /> и многое другое
                            </p>
                        </div>
                        <Image
                            width={600}
                            height={600}
                            src={'/Group 2254.svg'}
                            alt='phone'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
