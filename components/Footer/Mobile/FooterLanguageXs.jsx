import Image from 'next/image'
import React from 'react'

export default function FooterLanguageXs() {
    return (
        <div className='flex-center gap-[10px] mt-8 mb-14'>
            <Image
                src={'/global-black.svg'}
                width={24}
                height={24}
                alt='icon global'
            />
            <p>Русский</p>
        </div>
    )
}
