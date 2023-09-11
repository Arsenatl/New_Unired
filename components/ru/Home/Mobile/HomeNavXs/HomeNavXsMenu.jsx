'use client'
import Image from 'next/image'
import Link from 'next/link'
import HomeNavLanguageXs from './HomeNavLanguageXs'

export default function HomeNavXsMenu({ props, handleMenu }) {
    const handle = (e) => {
        handleMenu(e)
    }
    return (
        <div className={`${props ? 'translate-x-0' : '-translate-x-full'} overflow-hidden transition-all duration-300 h-[100vh] fixed top-0 left-0 bg-white w-full overflow-y-auto`}>
            <div className='relative container'>
                <div>
                    <div className='mt-5 text-center'>
                        <Link
                            href={'/ru'}
                            className='style-italic font-bold text-[#F44949] uppercase mt-5'>
                            Unired
                        </Link>
                    </div>
                    <button onClick={() => handle(false)} className='absolute top-6 right-5'>
                        <Image
                            src={'/close-circle.svg'}
                            width={24}
                            height={24}
                            alt='close button'
                        />
                    </button>
                </div>
                <div>
                    <h3 className='text-18-xs font-semibold mt-9 mb-7'>Продукты</h3>
                    <div className='flex flex-col gap-6'>
                        <Link
                            href={'/ru/money_transfers'}
                            className="group cursor-pointer ml-10px flex-center gap-4">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2.svg'}
                                alt="case"
                            />
                            <div>
                                <div className="flex-center gap-1">
                                    <h3 className="text-14-xs text-black tracking-[-0.14px] font-medium leading-normal">Денежные переводы</h3>
                                    <Image
                                        width={18}
                                        height={18}
                                        src={'/arrow-right-red.svg'}
                                        alt="arrow-right"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <p className="text-13-xs text-[#455464] font-normal tracking-[0.52px] leading-normal">Отправьте деньги онлайн</p>
                            </div>
                        </Link>
                        <Link
                            href={'/ru/visa_card'}
                            className="group cursor-pointer ml-10px flex-center gap-4">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2.svg'}
                                alt="case"
                            />
                            <div>
                                <div className="flex-center gap-1">
                                    <h3 className="text-14-xs text-black tracking-[-0.14px] font-medium leading-normal">Visa card</h3>
                                    <Image
                                        width={18}
                                        height={18}
                                        src={'/arrow-right-red.svg'}
                                        alt="arrow-right"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <p className="text-13-xs text-[#455464] font-normal tracking-[0.52px] leading-normal">Физический и виртуальный</p>
                            </div>
                        </Link>
                        <Link
                            href={'/ru/payments'}
                            className="group cursor-pointer ml-10px flex-center gap-4">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2.svg'}
                                alt="case"
                            />
                            <div>
                                <div className="flex-center gap-1">
                                    <h3 className="text-14-xs text-black tracking-[-0.14px] font-medium leading-normal">Платежи</h3>
                                    <Image
                                        width={18}
                                        height={18}
                                        src={'/arrow-right-red.svg'}
                                        alt="arrow-right"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <p className="text-13-xs text-[#455464] font-normal tracking-[0.52px] leading-normal">Онлайн оплата услуг3</p>
                            </div>
                        </Link>
                        <Link
                            href={'/ru/my_home'}
                            className="group cursor-pointer ml-10px flex-center gap-4">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2.svg'}
                                alt="case"
                            />
                            <div>
                                <div className="flex-center gap-1">
                                    <h3 className="text-14-xs text-black tracking-[-0.14px] font-medium leading-normal">Мой дом</h3>
                                    <Image
                                        width={18}
                                        height={18}
                                        src={'/arrow-right-red.svg'}
                                        alt="arrow-right"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <p className="text-13-xs text-[#455464] font-normal tracking-[0.52px] leading-normal">Лотте легко</p>
                            </div>
                        </Link>
                        <Link
                            href={'/ru/ucoin'}
                            className="group cursor-pointer ml-10px flex-center gap-4">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2.svg'}
                                alt="case"
                            />
                            <div>
                                <div className="flex-center gap-1">
                                    <h3 className="text-14-xs text-black tracking-[-0.14px] font-medium leading-normal">Ucoin</h3>
                                    <Image
                                        width={18}
                                        height={18}
                                        src={'/arrow-right-red.svg'}
                                        alt="arrow-right"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <p className="text-13-xs text-[#455464] font-normal tracking-[0.52px] leading-normal">Электронные деньги</p>
                            </div>
                        </Link>
                        {/* <Link
                            href={'/ru/other'}
                            className="group cursor-pointer ml-10px flex-center gap-4">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2.svg'}
                                alt="case"
                            />
                            <div>
                                <div className="flex-center gap-1">
                                    <h3 className="text-14-xs text-black tracking-[-0.14px] font-medium leading-normal">Другие</h3>
                                    <Image
                                        width={18}
                                        height={18}
                                        src={'/arrow-right-red.svg'}
                                        alt="arrow-right"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                                <p className="text-13-xs text-[#455464] font-normal tracking-[0.52px] leading-normal">Наши остальные услуги</p>
                            </div>
                        </Link> */}
                    </div>
                </div>
                <HomeNavLanguageXs />
            </div>
        </div>
    )
}
