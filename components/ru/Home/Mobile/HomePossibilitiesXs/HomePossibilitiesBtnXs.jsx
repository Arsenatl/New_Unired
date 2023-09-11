'use client'

import Image from "next/image"
import Link from "next/link"

export default function HomePossibilitiesBtnXs() {
    return (
        <Link target="blank" href={'http://onelink.to/unired_mobile'}>

        <button className='flex-center gap-2'>
            <p className="text-14-xs font-medium tracking-[0.28px] text-white">Узнать подробнее</p>
            <Image
                src={'/arrow-right.svg'}
                alt="icon right"
                width={24}
                height={24}
            />
        </button>
        </Link>
    )
}
