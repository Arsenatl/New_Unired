import React from 'react'
import MoneyCarusel from './MoneyCarusel'

export default function MoneyResults() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className='text-36'>Пул ўтказмалари бўйича бизнинг яқин <br /> кунлардаги натижаларимиз </h1>
                    <p className='text-18 font-light mt-5'>Пул ўтказмаларига қўшимча равишда бизда Ўзбекистондан 7та мамлакатга <br /> пул ўтказиш ва ҳозирда фақат Россиядан маблағларни қабул қилиш имконияти <br />мавжуд, лекин биз бошқа мамлакатларни қўшиш устида ишлаяпмиз.  </p>
                    <MoneyCarusel />
                </div>
            </div>
        </section>
    )
}
