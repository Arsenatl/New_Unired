'use client'

import Image from "next/image"
import { useState } from "react"
import HomeNavDownDrop from './HomeNavDownDrop'

export default function NavDown() {
    const [down, setDown] = useState('h-0')
    const [rotate, setRotate] = useState('rotate-180')
    const handleNav = (e) => {
        e ? (setDown('h-[256px]'), setRotate('rotate-0')) : (setDown('h-0'), setRotate('rotate-180'))
    }
    return (
        <div>
            <div onMouseEnter={() => handleNav(true)} className="flex-center gap-1 overflow-hidden cursor-pointer">
                <p className='text-[16px] leading-[19px] font-semibold text-white'>Продукты</p>
                <Image
                    width={16}
                    height={16}
                    src={'/arrow-down.svg'}
                    alt='arrow-down'
                    className={`${rotate} transition-all duration-700`}
                />
            </div>
            <div onMouseLeave={() => handleNav(false)}>
                <HomeNavDownDrop props={down} />
            </div>
        </div>
    )
}
