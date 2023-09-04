'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import img from '@/public/swiper.png'

export default function MoneyCaruselXs() {
    return (
        <section className='w-full mt-9 mb-12'>
            <div className="w-full h-full flex justify-center">
                <Carousel>
                    
                    <div className='relative w-full h-full'>
                        <Image
                            alt="carusel"
                            src={img}
                            className='w-full '
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>Айни пайтда Ўзбекистондан Қозоғистон, <br /> Россия, Туркия, Озарбойжон, Арманистон <br /> ва Тожикистонга пул ўтказмаларини юбориш мумкин.</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <Image
                            alt="carusel"
                            src={img}
                            className='w-full '
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>Айни пайтда Ўзбекистондан Қозоғистон, <br /> Россия, Туркия, Озарбойжон, Арманистон <br /> ва Тожикистонга пул ўтказмаларини юбориш мумкин.</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <Image
                            alt="carusel"
                            src={img}
                            className='w-full '
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>Айни пайтда Ўзбекистондан Қозоғистон, <br /> Россия, Туркия, Озарбойжон, Арманистон <br /> ва Тожикистонга пул ўтказмаларини юбориш мумкин.</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <Image
                            alt="carusel"
                            src={img}
                            className='w-full '
                        />
                        <div className='absolute bottom-10 left-4'>
                            <p className='text-14-xs text-white font-medium tracking-[0.28px]'>Айни пайтда Ўзбекистондан Қозоғистон, <br /> Россия, Туркия, Озарбойжон, Арманистон <br /> ва Тожикистонга пул ўтказмаларини юбориш мумкин.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}


