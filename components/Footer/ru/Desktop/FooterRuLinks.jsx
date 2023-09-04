import Image from 'next/image'
import Link from 'next/link'
import img1 from '@/public/Frame 2637.svg'
import img2 from '@/public/Frame 2638.svg'

export default function FooterRuLinks() {

    return (
        <div className="container">
            <div className="row flex justify-between">
                <div className='flex flex-col'>
                    <Link
                        href={'/ru'}
                        className='style-italic font-bold text-[#F44949]'>
                        Unired
                    </Link>
                    <Link
                        href={'+998991234567'}
                        className='text-16 leading-5 font-semibold mt-9 mb-5'>
                        <Image
                            src={img1}
                            alt='link'
                        />
                    </Link>
                    <div className="">

                        <Image
                            src={img2}
                            alt='link'
                        />
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-5'>
                        <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Продукты</li>
                        <li>
                            <Link
                                href={'/ru/money_transfers'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Денежные переводы
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/payments'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Платежи
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/visa_card'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Карты Visa
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/ucoin'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Ucoin
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/my_home'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Мой дом
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/other'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Другие
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-5'>
                        <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Контакты</li>
                        <li>
                            <Link
                                href={'+998991234567'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                +998 99 123 45 67
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'+998712345678'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                +998 71 234 56 78
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                work.space@mail.com
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/'}
                                className='text-18 tracking-normal text-[#1C1C1C]'
                            >
                                Город Ташкент, Мирабадский <br />район, ул. Афрасияб 5А
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-5'>
                        <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Социальные сети</li>
                        <li>
                            <Link
                                href={'/'}
                                className='text-18 flex-center gap-[10px] tracking-normal text-[#1C1C1C]'
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
                                href={'/'}
                                className='text-18 flex-center gap-[10px] tracking-normal text-[#1C1C1C]'
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
                                href={'/'}
                                className='text-18 flex-center gap-[10px] tracking-normal text-[#1C1C1C]'
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
                                className='text-18 flex-center gap-[10px] tracking-normal text-[#1C1C1C]'
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
            </div>
        </div> 
    )
}
