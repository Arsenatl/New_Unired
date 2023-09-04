'use client'

import Image from "next/image"

export default function HomeHeaderButtonXs() {
    return (
        <button
            className="btn-14-xs flex-center gap-2">
            <Image
                width={24}
                height={24}
                src={'/box.svg'}
                alt='cube'
            />
            Иловамизни юклаб олинг
        </button>
    )
}
