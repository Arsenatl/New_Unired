import React from 'react'
import MoneyCaruselXs from './MoneyCaruselXs'

export default function MoneyResultsXs() {
    return (
        <section>
            <div className="container">
                <h1 className='text-24-xs'>Пул ўтказмалари бўйича бизнинг яқин
кунлардаги натижаларимиз </h1>
                <p className='text-14-xs mt-5'>Пул ўтказмаларига қўшимча равишда бизда Ўзбекистондан 7та мамлакатга
пул ўтказиш ва ҳозирда фақат Россиядан маблағларни қабул қилиш имконияти
мавжуд, лекин биз бошқа мамлакатларни қўшиш устида ишлаяпмиз.</p>
                <MoneyCaruselXs />
            </div>
        </section>
    )
}
