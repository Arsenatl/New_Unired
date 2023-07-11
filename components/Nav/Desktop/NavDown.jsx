'use client'

import Image from "next/image"
import { useState } from "react"
import NavDownDrop from "./NavDownDrop"

export default function NavDown() {
    const [down, setDown] = useState(false)
    return (
        <div>
            <div onMouseEnter={() => setDown(true)} onClick={() => setDown(!down)} className="flex-center gap-1 overflow-hidden cursor-pointer">
                <p className='text-[16px] leading-[19px] font-semibold text-[#1C1C1C]'>Продукты</p>
                <Image
                    width={16}
                    height={16}
                    src={'/arrow-down-black.svg'}
                    alt='arrow-down'
                />
            </div>
            <div onMouseLeave={()=>setDown(false)}>
                <NavDownDrop props={down} />
            </div>
        </div>
    )
}
