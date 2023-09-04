'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ButtonHomeHeader from './ButtonHomeHeader'

export default function HomeHeader() {
    setTimeout(() => {
        setTop('translate-y-0')
    }, 400);
    const [top, setTop] = useState('translate-y-20')
    return (
        <header>
            <div className="container mt-[176px] mb-[144px]">
                {/* <h1 className='text-96'>Финансовая <br /> инфраструктура <br /> платежей</h1> */}
                <div className='-mt'>
                    <div className="overflow-hidden">
                        <div className={`${top} text-64 transition-all duration-700`}>Быстрые Переводы,</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className={`${top} text-64 transition-all duration-700`}>Удобные Платежи!</div>
                    </div>
                    {/* <div className="overflow-hidden">
                        <div className={`${top} text-96 transition-all duration-700`}>платежей</div>
                    </div> */}
                </div>
                <p className='text-18 mt-6 mb-5'>Отправляйте деньги из России в Узбекистан быстро и <br /> без хлопот! Наш сервис предоставляет простой доступ <br /> к переводам и удобной оплате разнообразных услуг. <br /> Отслеживайте транзакции, контролируйте бюджет и <br /> наслаждайтесь безопасностью и комфортом Unired.
</p>
                <ButtonHomeHeader />
            </div>
        </header>
    )
}
