import React from 'react'
import HomePossibilitiesBtnXs from './HomePossibilitiesBtnXs'
import HomePossibilitiesBottomXs from './HomePossibilitiesBottomXs'

export default function HomePossibilitiesXs() {
    return (
        <section className='bg-[#F7F9FC] pt-10 pb-24'>
            <div className="container">
                <h2 className="text-13-xs">Возможности Unired</h2>
                <h3 className='text-24-xs my-2'>Наше приложение в реальной жизни</h3>
                <p className='text-14-xs font-medium leading-[180%]'>Varius morbi enim nunc faucibus a pellentesque sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Tristique senectus et netus et malesuada fames. Scelerisque fermentum dui faucibus in ornare quam. Odio ut sem nulla pharetra diam sit amet. Orci porta non pulvinar neque laoreet suspendisse. Dictum non consectetur a erat nam. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec</p>
                <div className='bg-set bg-homePossibilitiesXs pt-36 pb-4 px-[10px] rounded my-5'>
                    <h4 className='text-16-xs font-bold tracking-[0.32px]'>На данный момент из  Узбекистана можно отправить деньги в Казахстан, Россия, Турция, Азербайджан, Армения и Таджикистан</h4>
                    <HomePossibilitiesBtnXs />
                </div>
            <HomePossibilitiesBottomXs />
            </div>
        </section>
    )
}
