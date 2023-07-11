import Image from 'next/image'
import Link from 'next/link'

export default function FooterLinks() {
  return (
    <div className="container">
                    <div className="row grid grid-cols-4">
                        <div className='flex flex-col'>
                            <Link
                                href={'/'}
                                className='style-italic font-bold text-[#F44949]'>
                                Unired
                            </Link>
                            <Link
                                href={'+998991234567'}
                                className='text-16 leading-5 font-semibold mt-9 mb-5'>
                                +998 99 123 45 67
                            </Link>
                            <div className="flex-center gap-[10px]">

                                <Image
                                    width={24}
                                    height={24}
                                    src={'/global-black.svg'}
                                    alt='earth'
                                />
                                <p className='text-[16px] leading-[19px] font-semibold text-[#1C1C1C]'>Язык</p>
                            </div>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Продукты</li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Денежные переводы
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Платежи
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Карты Visa
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Ucoin
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Мой дом
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Другие
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Решения</li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Решения</li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='text-18 tracking-normal text-[#1C1C1C]'
                                    >
                                        Продукты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
  )
}
