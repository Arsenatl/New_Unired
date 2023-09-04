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
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>Ўтказмалар</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Россиядан Ўзбекистонга пул ўтказмалари</h1>
                            <p className='text-18 mb-5'>Россиядан Ўзбекистонга пул ўтказмаларини энди бизнинг иловамиз орқали қулай ва осон амалга ошириш</p>

                            <ButtonHomeFinances logo='мамлакатларга онлайн пул ўтказмалари' span='Бошқа' />
                            <p className='text-18 mt-10'>
                                <span className='font-semibold text-[#EF2B23]'> МДҲ </span>
                                давлатлари ва
                                <span className='font-semibold text-[#EF2B23]'> Европага </span>
                                ҳеч қандай қийинчиликсиз онлайн пул ўтказмаларини амалга оширинг!
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
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>Тўловлар</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Россиядан Ўзбекистонга хизматлар учун тўлов</h1>

                            <p className='text-18 mb-5'>Ҳаётингизни соддалаштиринг – иловамизни юклаб олинг ва уйингиздан чиқмасдан Россиядан туриб Ўзбекистондаги хизматлар учун тўланг!</p>

                            <ButtonHomeFinances logo='учун онлайн тўловлар' span='Хизматлар ' /> 
                            <p className='text-18 mt-10'>
                            Ҳеч қандай муаммосиз онлайн хизматлар учун тўланг. Интернет ва ўйинлардан тортиб такси ва коммунал хизматларгача, бизда сизга керак бўлган ҳамма нарса бор! Бир нечта кликлар ва тўловингиз тугалланди.

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
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Исталган вақтда электрон пул</h1>
                            <p className='text-18 mb-5'>Unired иловасидан фойдаланиш тажрибангизни бойитинг: иловани ҳозир юклаб олинг ва бизнинг электрон ҳамёнимиз —“Ucoin”нинг барча афзалликларидан баҳраманд бўлинг!</p>

                            <ButtonHomeFinances logo='ҳамёнини очинг' span='UCOIN' /> 
                            <p className='text-18 mt-10'>
                            “Unired”да Ucoin билан қулай ва хавфсиз электрон пул ҳар доим қўлингизда. Харидлар учун тўланг, пул ўтказмаларини амалга оширинг ва молиянгизни самарали бошқаринг - буларнинг барчаси Ucoin билан қулай!

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
