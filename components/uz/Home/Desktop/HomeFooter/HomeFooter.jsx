import Image from 'next/image'
import Link from 'next/link'
import img2 from '@/public/Frame 2637 (1).svg'

export default function HomeFooter() {
    return (
        <footer className='bg-homeFooter bg-set pt-[300px] pb-36 mt-16'>
            <div className="container">
                <div className="row flex justify-between">
                    <div className='flex flex-col'>
                        <Link
                            href={'/'}
                            className='style-italic font-bold text-[#F44949] uppercase'>
                            Unired
                        </Link>
                        <Link className='mt-10' href={'http://onelink.to/unired_mobile'}>
                            <Image
                                src={img2}
                                alt='link'
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-5'>
                            <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Маҳсулотлар:</li>
                            <li>
                                <Link
                                    href={'/money_transfers'}
                                    className='text-18 tracking-normal text-[#1C1C1C]'
                                >
                                    Пул ўтказмалари
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/payments'}
                                    className='text-18 tracking-normal text-[#1C1C1C]'
                                >
                                    Тўловлар    
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/visa_card'}
                                    className='text-18 tracking-normal text-[#1C1C1C]'
                                >
                                    Visa card
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/ucoin'}
                                    className='text-18 tracking-normal text-[#1C1C1C]'
                                >
                                    Ucoin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/my_home'}
                                    className='text-18 tracking-normal text-[#1C1C1C]'
                                >
                                    Менинг уйим
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href={'/other'}
                                    className='text-18 tracking-normal text-[#1C1C1C]'
                                >
                                    Бошқа
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-5'>
                            <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Контактлар:</li>
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
                                    Тошкент шаҳри, Миробод тумани, <br /> Афросиёб 5А кўч.
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-5'>
                            <li className='text-18 font-bold tracking-normal text-[#1C1C1C] mb-5'>Ижтимоий тармоқлар</li>
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
        </footer>
    )
}
