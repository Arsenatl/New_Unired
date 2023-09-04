'use client'

import Image from "next/image"

export default function HomePossibilitiesBtnXs() {
    return (
        <button className='flex-center gap-2'>
            <p className="text-14-xs font-medium tracking-[0.28px] text-white">Батафсил маълумот

</p>
            <Image
                src={'/arrow-right.svg'}
                alt="icon right"
                width={24}
                height={24}
            />
        </button>
    )
}
