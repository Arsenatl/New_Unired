'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavLanguage() {
    const pathname = usePathname()
    const [path, setPath] = useState()
    useEffect(() => {
        setPath(pathname.slice(3))

    }, [pathname])
    const [rotate, setRotate] = useState('rotate-180')
    const [down, setDown] = useState('h-0')

    const language = (e) => {
        e ? (setDown('h-[95px]'), setRotate('rotate-0')) : (setDown('h-0'), setRotate('rotate-180'))
    }
    return (
        <div onMouseEnter={() => language(true)} className="relative">
            <div className="flex-center gap-1">
                <p className='text-[16px] leading-[19px] font-semibold text-[#1c1c1c]'>Ўзбек тили</p>
                <Image
                    width={16}
                    height={16}
                    src={'/arrow-down-black.svg'}
                    alt='arrow-down'
                    className={`${rotate} transition-all duration-700`}
                />
            </div>
            <div onMouseLeave={() => language(false)} className={`${down} overflow-hidden w-max absolute top-[18px] left-[8px] transition-all duration-700`}>
            <div className="rounded-[5px] border-[1px] border-[#DBE1E3]">
                    <div className="p-[10px] border-b-[1px] border-[#DBE1E3]">
                        <Link href={`/ru/${pathname}`}>
                            Русский язык
                        </Link>
                    </div>
                    <div className="p-[10px]  border-[#DBE1E3]">
                        <Link href={`${path}`}>
                        Ўзбек тили
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
