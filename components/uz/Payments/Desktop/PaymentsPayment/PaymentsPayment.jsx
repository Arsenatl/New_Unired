import React from 'react'
import ButtonPaymentsPayment from './ButtonPaymentsPayment'

export default function PaymentsPayment() {
    return (
        <section className="py-36 bg-[#F7F9FC] mt-32 mb-20">
            <div className="container">
                <div className="row">
                    <div className="grid grid-cols-[2fr_1fr] gap-24">
                        <div>
                            <h1 className='text-36'>Тезкор тўлов</h1>
                            <p className='text-18 font-light mt-5 my-5'>Кечикишлар ва кутишларни унутинг, пул ўтказмалари бир зумда амалга оширилади. Бу сизнинг молиянгизни самарали бошқарувини таъминлайди. 
Unired mobile билан хизматлар учун тўлов қилинг ва бир зумда пул юборинг!</p>
                            <ButtonPaymentsPayment />
                        </div>
                        <div className="before:content-[' '] before:block before:h-[30%] before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center">
                            <div>

                                <h2 className="text-14">
                                    Пул тушиш вақти: <br />
                                    <span className="text-36">1 дақиқа</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
