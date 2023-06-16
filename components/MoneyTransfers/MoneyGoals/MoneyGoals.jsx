import Image from 'next/image'
import React from 'react'

export default function MoneyGoals() {
    return (
        <section>
            <div className="container mb-24">
                <div className="row flex-between">
                    <div>
                        <h2 className='text-24 leading-9 font-bold text-[#EF2B23] mb-5'>Наши цели</h2>
                        <p className='text-18 font-light'>Мы намерены увеличить нашу географию - <br /> количество стран которые можно отправить и <br /> получить деньги, сейчас их семь. В последние дни <br /> мы работаем над новыми возможностями</p>
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
