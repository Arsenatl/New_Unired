import Image from 'next/image'
import React from 'react'

export default function MoneyGoals() {
    return (
        <section>
            <div className="container mb-24">
                <div className="row flex-between">
                    <div>
                        <h2 className='text-24 leading-9 font-bold text-[#EF2B23] mb-5'>Бизнинг мақсадларимиз</h2>
                        <p className='text-18 font-light'>Биз географиямизни кенгайтирмоқчимиз – <br /> ҳозирда пул юбориш ва қабул қилиш  мумкин<br /> бўлган мамлакатлар сони еттита. <br /> Сўнгги кунларда биз янги имкониятлар <br /> устида ишламоқдамиз.</p>
                    </div>
                    <Image
                    width={450}
                    height={500}
                    src={'/Rectangle 1620.png'}
                    alt='Goals'
                    />
                </div>
            </div>
        </section>
    )
}
