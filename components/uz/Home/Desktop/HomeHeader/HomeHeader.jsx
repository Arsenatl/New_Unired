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
                        <div className={`${top} text-64 transition-all duration-700`}>Тезкор ўтказмалар,</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className={`${top} text-64 transition-all duration-700`}>Қулай тўловлар!</div>
                    </div>
                    {/* <div className="overflow-hidden">
                        <div className={`${top} text-96 transition-all duration-700`}>платежей</div>
                    </div> */}
                </div>
                <p className='text-18 mt-6 mb-5'>Россиядан Ўзбекистонга тез ва муаммосиз пул юборинг! <br /> Бизнинг хизматимиз орқали содда усулда пул ўтказмаларини <br /> ва турли хизматлар учун қулай тўловларни амалга ошириш мумкин. <br /> Ўтказмаларни кузатиб боринг, бюджетингизни бошқаринг ва Unired <br /> хавфсизлиги ва қулайлигидан баҳраманд бўлинг. <br />
                    
                </p>
                <ButtonHomeHeader />
            </div>
        </header>
    )
}
