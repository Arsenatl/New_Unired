import Image from "next/image"
import Link from "next/link"

export default function NavDownDrop({ props }) {
    return (
        <div className={`${props} overflow-hidden transition-all duration-700 bg-white absolute z-30 top-10 left-[220px] rounded-md`}>
            <div className={` px-5 py-9 grid grid-cols-2 gap-x-7 gap-y-2 `}>
                <Link
                    href={'/ru/money_transfers'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Денежные переводы</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Отправьте деньги онлайн</p>
                    </div>
                </Link>
                <Link
                    href={'/ru/visa_card'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Visa card</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Физический и виртуальный</p>
                    </div>
                </Link>

                <Link
                    href={'/ru/payments'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Платежи</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Онлайн оплата услуг</p>
                    </div>
                </Link>

                <Link
                    href={'/ru/my_home'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Мой дом</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Лотте легко</p>
                    </div>
                </Link>
                <Link
                    href={'/ru/ucoin'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Ucoin</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Электронные деньги</p>
                    </div>
                </Link>
                {/* <Link
                    href={'/ru/ucoin'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Другие</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Наши остальные услуги</p>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}
