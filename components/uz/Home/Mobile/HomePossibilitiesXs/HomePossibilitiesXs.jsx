import React from 'react'
import HomePossibilitiesBtnXs from './HomePossibilitiesBtnXs'
import HomePossibilitiesBottomXs from './HomePossibilitiesBottomXs'

export default function HomePossibilitiesXs() {
    return (
        <section className='bg-[#F7F9FC] pt-10 pb-24'>
            <div className="container">
                <h2 className="text-13-xs">Unired имкониятлари</h2>
                <h3 className='text-24-xs my-2'>Бизнинг илова реал ҳаётда</h3>
                <p className='text-14-xs font-medium leading-[180%]'>Unired билан сиз пулингизни осонроқ, тезроқ ва хавфсизроқ бошқаришга ёрдам берадиган
замонавий молиявий воситалардан фойдаланасиз. Пул ўтказмасини жўнатиш, тўловларни
тўлаш ёки молиявий назоратни ўз қўлингизга олиш керак бўладими, Unired реал ҳаётда
сизга ёрдам бериш учун шу ерда!</p>
                <div className='bg-set bg-homePossibilitiesXs pt-36 pb-4 px-[10px] rounded my-5'>
                    <h4 className='text-16-xs font-bold tracking-[0.32px]'>Айни пайтда Ўзбекистондан Қозоғистон, Россия, Туркия,
Озарбойжон, Арманистон ва Тожикистонга пул ўтказмаларини
юбориш мумкин.</h4>
                    <HomePossibilitiesBtnXs />
                </div>
            <HomePossibilitiesBottomXs />
            </div>
        </section>
    )
}
