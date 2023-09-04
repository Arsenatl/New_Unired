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
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Денежные переводы из<br />России в Узбекистан</h1>
                            <p className='text-18 mb-5'>Удобные и легкие денежные переводы из России <br /> в Узбекистан теперь стали проще с нашим приложением.</p>

                            <ButtonHomeFinances logo='онлайн в другие страны' span='Переводы' />
                            <p className='text-18 mt-10'>
                                Осуществляйте онлайн переводы<br /> в страны
                                <span className='font-semibold text-[#EF2B23]'> СНГ </span>
                                и
                                <span className='font-semibold text-[#EF2B23]'> Eвропы </span>
                                без лишних хлопот!
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
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Оплата услуг из<br /> России в Узбекистан</h1>

                            <p className='text-18 mb-5'>Упростите свою жизнь – скачайте наше приложение <br /> и оплачивайте услуги из России в Узбекистан <br /> легко и удобно, не выходя из дома!</p>

                            <ButtonHomeFinances logo='платежи за услуги' span='Онлайн ' />
                            <p className='text-18 mt-10'>
                                Оплачивайте услуги онлайн без лишних хлопот. <br /> От интернета и игр до такси и коммунальных услуг <br /> - у нас есть все, что вам нужно! Всего несколько <br /> кликов, и ваш платеж совершен.

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
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Электронные деньги <br /> в любое время</h1>
                            <p className='text-18 mb-5'>Улучшите свой опыт использования Unired <br /> - скачайте приложение прямо сейчас и начните <br /> пользоваться всеми преимуществами U-coin, <br /> нашего электронного кошелька! </p>

                            <ButtonHomeFinances logo='электронный кошелёк' span='UCOIN' />
                            <p className='text-18 mt-10'>
                            С U-coin в Unired у вас всегда под рукой удобные <br /> и безопасные электронные деньги. Оплачивайте <br /> покупки, делайте переводы и управляйте своими <br /> финансами быстро и эффективно - все это возможно <br /> с U-coin!

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
