'use client'

import Image from "next/image"
import Link from "next/link"

export default function HomeHeaderButtonXs() {
    return (
        <Link target="blank" href={'http://onelink.to/unired_mobile'}>

            <button
                className="btn-14-xs flex-center gap-2">
                <Image
                    width={24}
                    height={24}
                    src={'/box.svg'}
                    alt='cube'
                />
                Воспользуйтесь нашим сервисом
            </button>
        </Link>
    )
}
