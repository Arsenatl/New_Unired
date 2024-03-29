'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import img from '@/public/paySwiper.png'

export default function PaymentsCaruselXs() {
    return (
        <section className='container w-full mt-9 mb-12'>
            <div className="w-full h-full flex justify-center">
                <Carousel>
                    <div className='relative w-full h-full flex justify-center'>
                        <Image
                            alt="carusel"
                            src={img}
                        className='w-full'
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full flex justify-center'>
                        <Image
                            alt="carusel"
                            src={img}
                        className='w-full'
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full flex justify-center'>
                        <Image
                            alt="carusel"
                            src={img}
                        className='w-full'
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full flex justify-center'>
                        <Image
                            alt="carusel"
                            src={img}
                        className='w-full'
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}


