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
                <p className='text-18 mt-6 mb-5'>Отправляйте деньги из России в Узбекистан быстро и без! <br /> Наш сервис предоставляет легкий доступ к переводам <br /> и оплате различных услуг без лишних сложностей. <br /> Отслеживайте свои транзакции, контролируйте расходы <br /> и наслаждайтесь безопасными и удобными финансовыми операциями.</p>
                <ButtonHomeHeader />
            </div>
        </header>
    )
}
