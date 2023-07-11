import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FooterListXs() {
    return (
        <div className='grid grid-cols-2 gap-x-9 gap-y-11'>
            <div>
                <ul className='flex flex-col gap-4'>
                    <li className='text-16-xs text-[#1C1C1C] tracking-normal font-bold mb-[14px]'>Продукты</li>
                    <li>
                        <Link href={'/money_transfers'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Денежные переводы</Link>
                    </li>
                    <li>
                        <Link href={'/payments'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Платежи</Link>
                    </li>
                    <li>
                        <Link href={'/visa_card'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Карты Visa</Link>
                    </li>
                    <li>
                        <Link href={'/ucoin'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Ucoin</Link>
                    </li>
                    <li>
                        <Link href={'/my_home'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Мой дом</Link>
                    </li>
                    <li>
                        <Link href={'/other'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Другие</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-4'>
                    <li className='text-16-xs text-[#1C1C1C] tracking-normal font-bold mb-[14px]'>Социальные сети</li>
                    <li>
                        <Link
                            href={'/'}
                            className='flex-center gap-[10px] text-16-xs font-normal tracking-normal text-[#1C1C1C]'
                            target='blank'
                        >
                            <Image
                                src={'/teleg.svg'}
                                alt='icon telegram'
                                width={24}
                                height={24}
                            />
                            Telegram
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'https://instagram.com/uniredmobile?igshid=OGQ5ZDc2ODk2ZA=='}
                            className='flex-center gap-[10px] text-16-xs font-normal tracking-normal text-[#1C1C1C]'
                            target='blank'
                        >
                            <Image
                                src={'/instagram.svg'}
                                alt='icon telegram'
                                width={24}
                                height={24}
                            />
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'https://www.youtube.com/results?search_query=unired'}
                            className='flex-center gap-[10px] text-16-xs font-normal tracking-normal text-[#1C1C1C]'
                            target='blank'
                        >
                            <Image
                                src={'/youtube.svg'}
                                alt='icon telegram'
                                width={24}
                                height={24}
                            />
                            YouTube
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/'}
                            className='flex-center gap-[10px] text-16-xs font-normal tracking-normal text-[#1C1C1C]'
                            target='blank'
                        >
                            <Image
                                src={'/facebook.svg'}
                                alt='icon telegram'
                                width={24}
                                height={24}
                            />
                            Facebook
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-4'>
                    <li className='text-16-xs text-[#1C1C1C] tracking-normal font-bold mb-[14px]'>Контакты</li>
                    <li>
                        <Link target='blank' href={''} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>+998 99 123 45 67</Link>
                    </li>
                    <li>
                        <Link target='blank' href={'https://instagram.com/arsen_atll?igshid=MzNlNGNkZWQ4Mg=='} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>+998 71 234 56 78</Link>
                    </li>
                    <li>
                        <Link target='blank' href={'work.space@mail.com'} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>work.space@mail.com</Link>
                    </li>
                    <li>
                        <Link target='blank' href={"https://www.google.com/maps/place/5+Afrosiyob+ko'chasi,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.305312,69.2626295,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b2022bb3865:0xae8684b7ec63bafe!8m2!3d41.305312!4d69.2645927?hl=ru-RU&entry=ttu"} className='text-16-xs font-normal tracking-normal text-[#1C1C1C]'>Город Ташкент, Мирабадский район, ул. Афрасияб 5А</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
