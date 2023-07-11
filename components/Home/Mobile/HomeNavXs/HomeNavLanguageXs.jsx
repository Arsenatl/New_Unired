import Image from 'next/image'
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
            <p>Русский</p>
            <Image
                src={'/arrow-down-black.svg'}
                width={16}
                height={16}
                alt='down icon'
            />
        </div>
    )
}
