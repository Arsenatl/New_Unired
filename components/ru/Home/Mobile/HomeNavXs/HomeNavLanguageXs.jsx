import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeNavLanguageXs() {
    return (
        <div className='flex-center gap-[10px] mt-12 mb-3'>
            <Image
                src={'/global-black.svg'}
                width={24}
                height={24}
                alt='icon global'
            />
            <Link href={'/'}>O’zbekcha</Link>
            <Image
                src={'/arrow-down-black.svg'}
                width={16}
                height={16}
                alt='down icon'
            />
        </div>
    )
}
