import React from 'react'
import MoneyCarusel from './MoneyCarusel'

export default function MoneyResults() {
    return (
        <section>
            <div className="container mb-52">
                <div className="row">
                    <h1 className='text-36'>Наши недавние результаты по денежным <br /> переводам </h1>
                    <p className='text-18 font-light mt-5'>В дополнение к местным денежным переводам у нас есть возможность переводить <br /> деньги из Узбекистана в 7 стран и на данный момент принимать деньги только из <br /> России, но мы также работаем над добавлением других стран</p>
                    <MoneyCarusel />
                </div>
            </div>
        </section>
    )
}
