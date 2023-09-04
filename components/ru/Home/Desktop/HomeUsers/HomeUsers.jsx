import Image from 'next/image'
import React from 'react'

export default function HomeUsers() {
    return (
        <section className='bg-homeUser bg-set pt-[368px] pb-[690px]'>
            <div className="container">
                <div className="row">
                    <h2 className='text-18 tracking-normal font-semibold text-white'>Пользователи</h2>
                    <h1 className='text-40 tracking-normal font-extrabold text-white mt-5 mb-[30px]'>Мы заботимся о наших клиентах, потoму <br /> что, они наш самый ценный актив</h1>
                    <p className='text-18 tracking-normal text-white'>Вот почему мы неустанно работаем над новым удобством для пользователей и новыми сервисами <br /> каждый день. В результате в настоящее время в нашем мобильном приложении более 50 000 <br /> пользователей  которые доверяют нам.</p>
                </div>
            </div>
        </section>
    )
}
