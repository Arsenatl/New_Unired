import Image from "next/image"
import Link from "next/link"

export default function NavDownDrop({ props }) {
    return (
        <div className={`${props} overflow-hidden transition-all duration-700 bg-white absolute z-30 top-10 left-[220px] rounded-md`}>
            <div className={` px-5 py-9 grid grid-cols-2 gap-x-7 gap-y-2 `}>
                <Link
                    href={'/money_transfers'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Пул ўтказмалари</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Маблағларни онлайн жўнатинг</p>
                    </div>
                </Link>
                <Link
                    href={'/visa_card'}
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
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Жисмоний ва виртуал</p>
                    </div>
                </Link>

                <Link
                    href={'/payments'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Тўловлар</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Хизматлар учун онлайн тўлов қилиш </p>
                    </div>
                </Link>

                <Link
                    href={'/my_home'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Менинг уйим</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">ТЖКХ, интернет ва бошқалар</p>
                    </div>
                </Link>
                <Link
                    href={'/ucoin'}
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
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Электрон пуллар</p>
                    </div>
                </Link>
                <Link
                    href={'/ucoin'}
                    className="hover:bg-[#FFF3F3] group cursor-pointer duration-300 p-[10px] pr-6 flex-center gap-4 rounded-md">
                    <Image
                        width={36}
                        height={36}
                        src={'/note-2.svg'}
                        alt="case"
                    />
                    <div>
                        <div className="flex-center gap-1">
                            <h3 className="text-[15px] leading-4 font-medium tracking-[-0.01em]">Бошқа</h3>
                            <Image
                                width={18}
                                height={18}
                                src={'/arrow-right-red.svg'}
                                alt="arrow-right"
                                className="hidden group-hover:block"
                            />
                        </div>
                        <p className="text-[14px] leading-4 tracking-wider text-[#455464] font-normal">Бизнинг бошқа хизматларимиз</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
