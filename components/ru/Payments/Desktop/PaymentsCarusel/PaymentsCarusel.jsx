'use client'

import { Carousel } from "flowbite-react"
import Image from "next/image"

export default function PaymentsCarusel() {
  return (
    <section className='w-full h-80 container mt-[-219px]'>
            <div className="row">
                <div className="w-full h-full flex justify-center">
                    <Carousel>
                        <div className='relative w-full h-full'>
                            <Image
                                width={600}
                                height={500}
                                alt="carusel"
                                src="/PaymentsCarusel.png"
                                className='w-full h-full'
                            />
                            <div className='absolute top-[50%] left-7'>
                                <p className='text-[20px] leading-7 tracking-wide font-medium text-white'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                            </div>
                        </div>
                        <div className='relative w-full h-full'>
                            <Image
                                width={600}
                                height={500}
                                alt="carusel"
                                src="/PaymentsCarusel.png"
                                className='w-full h-full'
                            />
                            <div className='absolute top-[50%] left-7'>
                                <p className='text-[20px] leading-7 tracking-wide font-medium text-white'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                            </div>
                        </div>
                        <div className='relative w-full h-full'>
                            <Image
                                width={600}
                                height={500}
                                alt="carusel"
                                src="/PaymentsCarusel.png"
                                className='w-full h-full'
                            />
                            <div className='absolute top-[50%] left-7'>
                                <p className='text-[20px] leading-7 tracking-wide font-medium text-white'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                            </div>
                        </div>
                        <div className='relative w-full h-full'>
                            <Image
                                width={600}
                                height={500}
                                alt="carusel"
                                src="/PaymentsCarusel.png"
                                className='w-full h-full'
                            />
                            <div className='absolute top-[50%] left-7'>
                                <p className='text-[20px] leading-7 tracking-wide font-medium text-white'>На данный момент из  Узбекистана можно <br /> отправить деньги в Казахстан, Россия, Турция, <br /> Азербайджан, Армения и Таджикистан</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
  )
}
