import React from 'react'
import ButtonPaymentsPayment from './ButtonPaymentsPayment'

export default function PaymentsPayment() {
    return (
        <section className="py-36 bg-[#F7F9FC] mt-32 mb-20">
            <div className="container">
                <div className="row">
                    <div className="grid grid-cols-[2fr_1fr] gap-24">
                        <div>
                            <h1 className='text-36'>Моментальный платеж</h1>
                            <p className='text-18 font-light mt-5 my-5'>Забудьте о задержках и ожиданиях - переводы осуществляются мгновенно, обеспечивая быстрое и эффективное управление вашими финансами. Оплачивайте услуги и отправляйте деньги на мгновенные переводы с Unired Mobile, чтобы сэкономить время и получить максимум удовольствия от нашего сервиса!</p>
                            <ButtonPaymentsPayment />
                        </div>
                        <div className="before:content-[' '] before:block before:h-[30%] before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center">
                            <div>

                                <h2 className="text-14">
                                    время зачисления от<br />
                                    <span className="text-36">1 минута</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
