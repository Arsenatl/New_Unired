import Image from 'next/image'
import React from 'react'

export default function HomeStartMoreBtnXs() {
    return (
        <button
            className='text-16-xs tracking-[0.32px] text-[#1C1C1C] leading-[100%} flex-center gap-2'
        >
            Батафсил маълумот
            <Image
                src={'/arrow-right-black.svg'}
                alt='icon right'
                width={24}
                height={24}
            />
        </button>
    )
}
