'use client'
import { useState } from 'react';

export default function HomeHeaderXs() {
    setTimeout(() => {
        setTop('translate-y-0')
    }, 400);
    const [top, setTop] = useState('translate-y-20')
    return (
        <header className='mt-7 pb-5'>
            <div className="container">
            <div className='-mt'>
                    <div className="overflow-hidden">
                        <div className={`${top} text-40-xs transition-all duration-700`}>Тезкор ўтказмалар,</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className={`${top} text-40-xs transition-all duration-700`}>Қулай тўловлар!</div>
                    </div>
                    {/* <div className="overflow-hidden">
                        <div className={`${top} text-96 transition-all duration-700`}>платежей</div>
                    </div> */}
                </div>            </div>
        </header>
    )
}
