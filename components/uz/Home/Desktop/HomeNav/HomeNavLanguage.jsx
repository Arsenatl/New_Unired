'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomeNavLanguage() {
    // const [lang, setLang] = useState()
    const [rotate, setRotate] = useState('rotate-180')
    const [down, setDown] = useState('h-0')

    const language = (e) => {
        e ? (setDown('h-[95px]'), setRotate('rotate-0')) : (setDown('h-0'), setRotate('rotate-180'))
    }
    return (
        <div onMouseEnter={() => language(true)} className="relative">
            <div className="flex-center gap-1">
                <p className='text-[16px] leading-[19px] font-semibold text-white'>Ўзбек тили</p>
                <Image
                    width={16}
                    height={16}
                    src={'/arrow-down.svg'}
                    alt='arrow-down'
                    className={`${rotate} transition-all duration-700`}
                />
            </div>
            <div onMouseLeave={() => language(false)} className={`${down} overflow-hidden absolute top-[18px] left-[8px] transition-all duration-700`}>
            <div className="rounded-[5px] bg-white">
                    <div className="p-[10px]  border-[#DBE1E3]">
                        <Link href={'/'} className="text-[#333]">
                        Ўзбек тили
                        </Link>
                    </div>
                    <div className="p-[10px] border-t-[1px] w-max border-[#DBE1E3]">
                        <Link href={'/ru'} className="text-[#333]">
                            Русский язык
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
