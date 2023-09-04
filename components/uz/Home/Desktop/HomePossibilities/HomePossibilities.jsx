import Image from 'next/image'
import React from 'react'

export default function HomePossibilities() {
    return (
        <section className='bg-[#F7F9FC] pt-24 mt-32'>
            <div className="container">
                <div className="row">
                    <h2 className='text-18 tracking-[0.01em] font-bold text-[#EF2B23]'>Unired имкониятлари</h2>
                    <h1 className='text-40 my-7'>Бизнинг илова реал ҳаётда</h1>
                    <p className='text-18 leading-7 font-medium'>Unired билан сиз пулингизни осонроқ, тезроқ ва хавфсизроқ бошқаришга ёрдам берадиган <br /> замонавий молиявий воситалардан фойдаланасиз. Пул ўтказмасини жўнатиш, тўловларни <br /> тўлаш ёки молиявий назоратни ўз қўлингизга олиш керак бўладими, Unired реал ҳаётда <br /> сизга ёрдам бериш учун шу ерда!</p>
                    <div className='bg-homePossibilities bg-set rounded-xl pt-60 pb-8 pl-7 my-12'>
                        <h3 className='text-[28px] leading-10 font-bold tracking-wide text-white'>Айни пайтда Ўзбекистондан Қозоғистон, Россия, Туркия, <br /> Озарбойжон, Арманистон ва Тожикистонга пул ўтказмаларини <br /> юбориш мумкин.</h3>
                        <div className="flex-center gap-2">
                            <p className='text-18 font-medium tracking-wide text-white'>Батафсил маълумот</p>
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
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>Ўзбекистондан МДҲ ва Европага пул жўнатиш</h2>
                        </div>
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#0E4CA3] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>VISA virtual очиш</h2>
                        </div>
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#F4BA49] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>Ucoin электрон пуллари</h2>
                        </div>
                        <div className='before:content-[" "] before:w-full before:h-[2px] before:bg-[#F44949] before:mb-10px before:block'>
                            <h2 className='text-24 leading-8 font-bold tracking-wide text-[#1C1C1C]'>ЎзР ва РФ ўртасидаги ўтказмалар 🇺🇿🔄🇷🇺</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
