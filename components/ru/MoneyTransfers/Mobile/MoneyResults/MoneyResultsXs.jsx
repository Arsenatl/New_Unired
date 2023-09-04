import React from 'react'
import MoneyCaruselXs from './MoneyCaruselXs'

export default function MoneyResultsXs() {
    return (
        <section>
            <div className="container">
                <h1 className='text-24-xs'>Наши недавние результаты <br /> по денежным переводам </h1>
                <p className='text-14-xs mt-5'>В дополнение к местным денежным переводам у <br /> нас есть возможность переводить деньги из <br /> Узбекистана в 7 стран и на данный момент <br /> принимать деньги только из России, но мы также <br /> работаем над добавлением других стран</p>
                <MoneyCaruselXs />
            </div>
        </section>
    )
}
