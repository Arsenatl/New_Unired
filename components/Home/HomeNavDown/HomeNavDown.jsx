'use client'

import Image from "next/image"
import { useState } from "react"
import HomeNavDownDrop from '../HomeNavDownDrop/HomeNavDownDrop'

export default function NavDown() {
    const [down, setDown] = useState(false)
    return (
        <div>
            <div onMouseEnter={() => setDown(true)} onClick={() => setDown(!down)} className="flex-center gap-1 overflow-hidden cursor-pointer">
                <p className='text-[16px] leading-[19px] font-semibold text-white'>Продукты</p>
                <Image
                    width={16}
                    height={16}
                    src={'/arrow-down.svg'}
                    alt='arrow-down'
                />
            </div>
            <div onMouseLeave={() => setDown(false)}>
                <HomeNavDownDrop props={down} />
            </div>
        </div>
    )
}
