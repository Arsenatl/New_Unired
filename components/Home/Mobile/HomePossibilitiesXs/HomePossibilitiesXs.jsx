import React from 'react'
import HomePossibilitiesBtnXs from './HomePossibilitiesBtnXs'
import HomePossibilitiesBottomXs from './HomePossibilitiesBottomXs'

export default function HomePossibilitiesXs() {
    return (
        <section className='bg-[#F7F9FC] pt-10 pb-24'>
            <div className="container">
                <h2 className="text-13-xs">Возможности Unired</h2>
                <h3 className='text-24-xs my-2'>Наше приложение в реальной жизни</h3>
                <p className='text-14-xs font-medium leading-[180%]'>С Unired вы получите доступ к современным финансовым инструментам, которые помогут вам управлять своими деньгами проще, быстрее и безопаснее. Независимо от того, нужно ли вам отправить денежный перевод, оплатить счета или контролировать свои финансы, Unired всегда будет рядом, чтобы помочь вам в реальной жизни!</p>
                <div className='bg-set bg-homePossibilitiesXs pt-36 pb-4 px-[10px] rounded my-5'>
                    <h4 className='text-16-xs font-bold tracking-[0.32px]'>На данный момент из  Узбекистана можно отправить деньги в Казахстан, Россия, Турция, Азербайджан, Армения и Таджикистан</h4>
                    <HomePossibilitiesBtnXs />
                </div>
            <HomePossibilitiesBottomXs />
            </div>
        </section>
    )
}
